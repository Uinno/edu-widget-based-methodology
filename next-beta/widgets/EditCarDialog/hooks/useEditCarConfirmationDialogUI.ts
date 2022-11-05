'use client'

import {useRecoilState, useSetRecoilState} from "recoil";
import {editCarConfirmationDialogState, editCarDialogId} from "../store/EditCarDialog.store";

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
