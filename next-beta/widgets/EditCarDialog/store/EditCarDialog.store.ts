'use client'

import {atom, selector, selectorFamily} from "recoil";

export type EditCar = {
    id: number,
    brand: string,
    model: string,
    year: number
}

export const editCarDialogId = atom<string | number | null>({
    key: "EditCarDialog/Id",
    default: null,
})

export const editCarDialogIsOpen = selectorFamily<boolean, string>({
    key: 'EditCarDialog/IsOpen',
    get: id => ({get}) => {
        const dialogId = get(editCarDialogId);

        return dialogId !== null && dialogId === id;
    }
})

export const editCarDialogInitialState = selector<EditCar>({
    key: 'EditCarDialogInitialState',
    get: async ({get}) => {
        const id = get(editCarDialogId);
        if (id === null) return;
        const result = await fetch(`http://localhost:3001/cars/${id}`);
        // TODO: investigate throw in prod
        if(!result.ok) return Promise.reject(result.statusText);

        return result.json()
    }
})

export const editCarConfirmationDialogState = atom({
    key: 'EditCarConfirmationDialog/State',
    default: false,
})

export const editCarDialogIsProcessing = atom({
    key: 'EditCarDialog/IsProcessing',
    default: false,
})

export const editCarDialogIsDirty = atom({
    key: 'EditCarDialog/IsDirty',
    default: false,
})

export const editCarDialogErrorState = atom<string | null>({
    key: 'EditCarDialog/Error',
    default: null,
})
