import {useRecoilCallback, useRecoilValue} from "recoil";
import {createCarConfirmationDialogOpenAtom} from "./create-car-confirmation-dialog.store";

/**
 * I think that it is a possibly good reason to move all "recoil" functionality
 * to "useCases" and call the necessary hooks already in the component state
 * but in this case we receive verbosity that couldn't need.
 */

export const useCreateCarConfirmationDialogClose = () => {
    return useRecoilCallback(({reset}) => ()=> {
        reset(createCarConfirmationDialogOpenAtom)
    })
}

export const useCreateCarConfirmationDialogOpen = () => {
    return useRecoilCallback(({set}) => () => {
        set(createCarConfirmationDialogOpenAtom, true)
    })
}

export const useCreateCarConfirmationDialogOpenState = () => {
    return useRecoilValue(createCarConfirmationDialogOpenAtom);
}
