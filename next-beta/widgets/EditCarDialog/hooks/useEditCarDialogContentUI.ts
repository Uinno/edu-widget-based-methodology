'use client'

import {useRecoilValue} from "recoil";
import {editCarDialogIsProcessing} from "../store/EditCarDialog.store";

export const useEditCarDialogContentUI = () => {
    const areControlsDisabled = useRecoilValue(editCarDialogIsProcessing);

    return {
        areControlsDisabled,
    }
}
