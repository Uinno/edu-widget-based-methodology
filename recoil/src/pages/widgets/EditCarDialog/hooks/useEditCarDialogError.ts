import {useRecoilCallback, useRecoilValue} from "recoil";
import {editCarDialogErrorState} from "../store/edit-car-dialog.store";

export const useEditCarDialogError = () => {

    const editCarDialogError = useRecoilValue(editCarDialogErrorState);

    const removeEditCarDialogError = useRecoilCallback(({reset}) => () => {
        reset(editCarDialogErrorState);
    })

    return {
        editCarDialogError,
        removeEditCarDialogError,
    }
}
