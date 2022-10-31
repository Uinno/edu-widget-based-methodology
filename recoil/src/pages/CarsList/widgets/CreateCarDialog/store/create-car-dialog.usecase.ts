import {useRecoilCallback} from "recoil";
import {
    createCarConfirmationDialogOpenAtom
} from "../../CreateCarConfirmationDialog/store/create-car-confirmation-dialog.store";
import {carListQuery} from "../../CarList/store/car-list.store";
import {
    CreateCar,
    createCarDialogIsLoadingAtom,
    createCarDialogNetworkErrorAtom,
    createCarDialogOpenAtom
} from "./create-car-dialog.store";

export const useCreateCarDialogCloseHandler = (isDirty: boolean) => {
    const createCarDialogReset = useCreateCarDialogReset();
    return useRecoilCallback(({set}) => async () => {
        if (isDirty) {
            return set(createCarConfirmationDialogOpenAtom, true);
        }

        createCarDialogReset();
    }, [isDirty])
}

export const useCreateCarMutation = () => {
    const createCarDialogReset = useCreateCarDialogReset();
    return useRecoilCallback(({set, refresh}) => async (car: CreateCar) => {
        set(createCarDialogIsLoadingAtom, true)
        const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            set(createCarDialogNetworkErrorAtom, "Server error");
            throw new Error('Server error');
        }

        refresh(carListQuery);
        createCarDialogReset();
    }, [])
}

export const useCreateCarDialogReset = () => {
    return useRecoilCallback(({reset}) => () => {
        reset(createCarDialogIsLoadingAtom)
        reset(createCarDialogOpenAtom)
        reset(createCarDialogNetworkErrorAtom)
    })
}
