import {editCarConfirmationDialogState, editCarDialogId} from "../store/edit-car-dialog.store";
import {useRecoilState, useSetRecoilState} from "recoil";

/**
 * In this hook we see an example of using callbacks without useRecoilCallback
 */
export const useEditCarConfirmationDialogUI = () => {
    const [isConfirmationDialogOpen, setConfirmationDialogState] = useRecoilState(editCarConfirmationDialogState);
    const setCarId = useSetRecoilState(editCarDialogId);

    const onConfirmationDialogConfirmHandler = () => {
        setConfirmationDialogState(false);
        setCarId(null)
    }

    const onConfirmationDialogCancelHandler = () => {
        setConfirmationDialogState(false);
    }

    return {
        isConfirmationDialogOpen,
        onConfirmationDialogConfirmHandler,
        onConfirmationDialogCancelHandler
    } as const;
}
