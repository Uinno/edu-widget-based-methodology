import {atom, useRecoilCallback, useRecoilValue} from "recoil";

export const editCarConfirmationDialogOpenAtom = atom({
    key:'EditCarConfirmationDialogOpenAtom',
    default: false
})

export const useEditCarConfirmationDialogClose = () => {
    return useRecoilCallback(({reset}) => ()=> {
        reset(editCarConfirmationDialogOpenAtom)
    })
}

export const useEditCarConfirmationDialogOpenState = () => {
    return useRecoilValue(editCarConfirmationDialogOpenAtom);
}

