'use client'

import {useRecoilValue} from "recoil";
import {editCarDialogIsProcessing} from "../store/edit-car-dialog.store";

export const useEditCarDialogContentUI = () => {
    const areControlsDisabled = useRecoilValue(editCarDialogIsProcessing);

    return {
        areControlsDisabled,
    }
}
