import {atom,} from "recoil";

export type CreateCar = {
    brand: string,
    model: string,
    year: number
};

export const createCarDialogIsLoadingAtom = atom({
    key: 'CreateCarDialogIsLoading',
    default: false,
})

export const createCarDialogOpenAtom = atom({
    key: 'CreateCarDialogOpen',
    default: false,
})

export const createCarDialogNetworkErrorAtom = atom({
    key: 'CreateCarDialogAtom',
    default: ""
})


