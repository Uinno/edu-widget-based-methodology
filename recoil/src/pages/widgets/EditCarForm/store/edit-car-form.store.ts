import {atom, selector} from "recoil";
import {editCarDialogOpenAtom} from "../../EditCarDialog/store/edit-car-dialog.store";

export type EditCar = {
    id: number,
    brand: string,
    model: string,
    year: number,
};

export const editCarDialogInitialState = atom<EditCar | undefined>({
    key: 'EditCarDialogInitialState',
    default: selector({
        key: 'EditCarDialogInitialStateQuery',
        get: async ({get}) => {

            const carId = get(editCarDialogOpenAtom);

            if(carId === null){
                return;
            }

            const response = await fetch(`http://localhost:3000/cars/${carId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Server error');
            }

            return (await response.json()) as EditCar;
        },
    }),
})

export const editCarDialogCurrentState = atom<EditCar | undefined>({
    key: "EditCarDialogCurrentState",
    default: selector({
        key: 'EditCarDialogCurrentStateSelector',
        get: ({get}) => {
            return get(editCarDialogInitialState);
        }
    })
})


