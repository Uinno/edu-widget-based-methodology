import {useRecoilValue} from "recoil";
import {createCarDialogIsProcessing} from "../store/CreateCarDialog.store";

export const useCreateCarDialogContentUI = () => {
    const areControlsDisabled = useRecoilValue(createCarDialogIsProcessing);

    return {
        areControlsDisabled,
    }
}
