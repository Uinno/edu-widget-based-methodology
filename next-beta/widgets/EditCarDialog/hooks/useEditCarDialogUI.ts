'use client'

import {useRecoilCallback, useRecoilValue} from "recoil";
import {
    editCarConfirmationDialogState,
    editCarDialogId,
    editCarDialogIsDirty,
    editCarDialogIsOpen
} from "../store/EditCarDialog.store";

/**
 * We definitely can split this hook into three
 * but here I see the common boundary of UI events and properties
 * @param id
 */
export const useEditCarDialogUI = ({id}:{id: string}) => {
    const isEditCarDialogOpen = useRecoilValue(editCarDialogIsOpen(id))

    /**
     * We can use `useRecoilCallback` instead of receiving values from hooks above
     * In the example below it probably doesn't matter but in the case of some
     * async actions `useRecoilCallback` will be the best way.
     */
    const openEditCarDialog = useRecoilCallback(({set}) => () => {
        set(editCarDialogId, id)
    },[id])

    const closeEditCarDialog = useRecoilCallback(({reset,set, snapshot}) => () => {
        const isEditCarDialogDirty = snapshot.getLoadable(editCarDialogIsDirty).getValue()
        if(isEditCarDialogDirty){
            set(editCarConfirmationDialogState, true)
        }
        reset(editCarDialogId);
    },[])

    return {
        openEditCarDialog,
        closeEditCarDialog,
        isEditCarDialogOpen
    }
}
