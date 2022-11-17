import {useRecoilCallback, useRecoilValue} from "recoil";
import {editCarDialogErrorState} from "../store/EditCarDialog.store";

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
