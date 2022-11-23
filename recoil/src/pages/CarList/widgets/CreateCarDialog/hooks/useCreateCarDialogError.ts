import {useRecoilCallback, useRecoilValue} from "recoil";
import {createCarDialogErrorState} from "../store/create-car-dialog.store";

export const useCreateCarDialogError = () => {
    const createCarDialogError = useRecoilValue(createCarDialogErrorState);

    const removeCreateCarDialogError = useRecoilCallback(({reset}) => () => {
        reset(createCarDialogErrorState);
    })

    return {
        createCarDialogError,
        removeCreateCarDialogError
    }
}
