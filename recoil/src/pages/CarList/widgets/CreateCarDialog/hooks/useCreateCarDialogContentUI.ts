import {useRecoilValue} from "recoil";
import {createCarDialogIsProcessing} from "../store/create-car-dialog.store";

export const useCreateCarDialogContentUI = () => {
    const areControlsDisabled = useRecoilValue(createCarDialogIsProcessing);

    return {
        areControlsDisabled,
    }
}
