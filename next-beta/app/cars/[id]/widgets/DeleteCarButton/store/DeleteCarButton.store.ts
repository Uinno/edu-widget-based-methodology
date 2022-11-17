import {atom, selectorFamily} from "recoil";

export const deleteCarButtonConfirmationDialogIsProcessing = atom<boolean>({
    key: 'DeleteCarButtonConfirmationDialogIsProcessing',
    default: false
})

export const deleteCarButtonConfirmationDialogId = atom<string | null>({
    key: 'DeleteCarButtonConfirmationDialogId',
    default: null,
})

export const deleteCarButtonConfirmationDialogIsOpen = selectorFamily<boolean, string>({
    key: 'DeleteCarButtonConfirmationDialogIsOpen',
    get: carId => ({get}) => {
        const id = get(deleteCarButtonConfirmationDialogId)

        return id === carId;
    }
})
