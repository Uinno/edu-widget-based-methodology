import {useRecoilCallback, useRecoilSnapshot, useSetRecoilState} from "recoil";
import {
    EditCar,
    editCarDialogIsLoadingAtom,
    editCarDialogNetworkErrorAtom,
    editCarDialogOpenAtom
} from "./edit-car-dialog.store";
import {carList, carListQuery} from "../../../CarsList/widgets/CarList/store/car-list.store";
import {carDetailsQuery} from "../../../CarDetails/widgets/CarDetails/store/car-details.store";
import {
    editCarConfirmationDialogOpenAtom
} from "../../EditCarConfirmationDialog/store/edit-car-confirmation-dialog.store";
import {httpClient} from "../../../../api/http-client";

export const useEditCarDialogCloseHandler = () => {
    return useRecoilCallback(({set}) => async (isDirty: boolean) => {
        if (isDirty) {
            set(editCarConfirmationDialogOpenAtom, true)
            return false;
        }

        return true;
    }, [])
}

export const useEditCarDialogReset = () => {
    return useRecoilCallback(({reset, snapshot}) => () => {
        reset(editCarDialogIsLoadingAtom);
        reset(editCarDialogOpenAtom);
        reset(editCarDialogNetworkErrorAtom)
    }, [])
}

export const useEditCarMutation = () => {
    return useRecoilCallback(({set, refresh, reset, snapshot}) => async (editCar: EditCar) => {
        const s = snapshot.map(c => {
            console.log("C", c)
        })
        set(carList, (currVal) =>{
            const u= currVal.map(car => {
                if(car.id == editCar.id){
                    return editCar
                }

                return car;
            })
            console.log("U", u);
            return u;
        })

        const {id, ...changes} = editCar;

        await httpClient.put<EditCar>(`http://localhost:3000/cars/${id}`, changes)

        reset(editCarDialogOpenAtom)
        // refresh(carListQuery)
        // refresh(carDetailsQuery(id))
    }, [])
}

export const useDeleteCarMutation = () => {
    const editCarDialogReset = useEditCarDialogReset();
    return useRecoilCallback(({set, refresh}) => async (carId: string | number) => {
        set(editCarDialogIsLoadingAtom, true);
        const response = await fetch(`http://localhost:3000/cars/${carId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            set(editCarDialogNetworkErrorAtom, "Server error");
            throw new Error('Server error');
        }

        refresh(carListQuery)
        refresh(carDetailsQuery(carId))
        editCarDialogReset();
    }, [])
}
