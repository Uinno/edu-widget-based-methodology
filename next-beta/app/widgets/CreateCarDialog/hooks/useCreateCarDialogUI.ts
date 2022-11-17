import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    createCarConfirmationDialogIsOpen,
    createCarDialogIsDirty,
    createCarDialogIsOpen
} from "../store/CreateCarDialog.store";

export const useCreateCarDialogUI = () => {
    const isCreateCarDialogOpen = useRecoilValue(createCarDialogIsOpen);
    const isCreateCarDialogDirty = useRecoilValue(createCarDialogIsDirty);
    const setCreateCarConfirmationDialogIsOpen = useSetRecoilState(createCarConfirmationDialogIsOpen);
    const setCreateCarDialogIsOpen = useSetRecoilState(createCarDialogIsOpen)

    const onCreateCarDialogCloseHandler = () => {
        if (isCreateCarDialogDirty) {
            return setCreateCarConfirmationDialogIsOpen(true);
        }
        setCreateCarDialogIsOpen(false)
    }

    return {
        isCreateCarDialogOpen,
        onCreateCarDialogCloseHandler,
    }
}
