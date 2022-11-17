import {atom} from "recoil";

export const createCarDialogIsOpen = atom<boolean>({
    key: 'CreateCarDialog/IsOpen',
    default: false,
})

export const createCarConfirmationDialogIsOpen = atom({
    key: 'CreateCarConfirmationDialog/State',
    default: false,
})

export const createCarDialogIsProcessing = atom({
    key: 'CreateCarDialog/IsProcessing',
    default: false,
})

export const createCarDialogIsDirty = atom({
    key: 'CreateCarDialog/IsDirty',
    default: false,
})
export const createCarDialogErrorState = atom<string | null>({
    key: 'CreateCarDialog/Error',
    default: null,
})
