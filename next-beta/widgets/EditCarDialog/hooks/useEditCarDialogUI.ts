'use client'

import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    editCarConfirmationDialogState,
    editCarDialogId,
    editCarDialogIsDirty,
    editCarDialogIsOpen
} from "../store/EditCarDialog.store";

export const useEditCarDialogUI = ({id}:{id: string}) => {
    const setEditingCarId = useSetRecoilState(editCarDialogId);
    const isEditCarDialogOpen = useRecoilValue(editCarDialogIsOpen(id))
    const isEditCarDialogDirty = useRecoilValue(editCarDialogIsDirty);
    const setConfirmationDialogState = useSetRecoilState(editCarConfirmationDialogState);

    const onCloseHandler = () => {
        if (isEditCarDialogDirty) {
            return setConfirmationDialogState(true);
        }
        setEditingCarId(null)
    }

    return {
        onCloseHandler,
        isEditCarDialogOpen
    }
}
