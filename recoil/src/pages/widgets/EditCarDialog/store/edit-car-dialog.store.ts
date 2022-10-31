import {atom, atomFamily, selectorFamily} from "recoil";
import {carListQuery} from "../../../CarsList/widgets/CarList/store/car-list.store";
import {syncEffect} from "recoil-sync";

export type EditCar = {
    id: number,
    brand: string,
    model: string,
    year: number
};

export const editCarDialogIsLoadingAtom = atom({
    key: 'EditCarDialogIsLoading',
    default: false,
})

export const editCarDialogOpenAtom = atom<string | number | null>({
    key: 'EditCarDialogOpen',
    default: null,
})

export const editCarDialogOpened = selectorFamily<boolean, string | number | undefined>({
    key: 'EditCarDialogOpened',
    get: carId => ({get}) => {
        const editCarDialogId = get(editCarDialogOpenAtom);
        return editCarDialogId == carId;
    }
})

export const editCarDialogNetworkErrorAtom = atom({
    key: 'EditCarDialogAtom',
    default: ""
})

export const editCarDialogAction = atom<'idle' | 'save' | 'delete' | 'process'>({
    key: 'EditCarDialogAction',
    default: 'idle',
    effects: [
        ({onSet, getLoadable, }) => {
            onSet((newValue, oldValue, isReset) => {
                const carList = getLoadable(carListQuery);
                console.log("carList", carList)
            })
        },
    ],
})
