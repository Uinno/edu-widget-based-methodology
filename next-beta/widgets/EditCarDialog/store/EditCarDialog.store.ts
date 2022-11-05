'use client'

import {atom, selector, selectorFamily} from "recoil";

export type EditCar = {
    id: number,
    brand: string,
    model: string,
    year: number
}

export const editCarDialogId = atom<string | number | null>({
    key: "EditCarDialogId",
    default: null
})

export const editCarDialogIsOpen = selectorFamily<boolean, string>({
    key: 'EditCarDialogIsOpen',
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
        return result.json();
    }
})

export const editCarConfirmationDialogState = atom({
    key: 'EditCarConfirmationDialogState',
    default: false,
})

export const editCarDialogIsProcessing = atom({
    key: 'EditCarDialogIsProcessing',
    default: false,
})

export const editCarDialogIsDirty = atom({
    key: 'EditCarDialogIsDirty',
    default: false,
})
