import {useRecoilState, useSetRecoilState} from "recoil";
import {createCarConfirmationDialogIsOpen, createCarDialogIsOpen} from "../store/create-car-dialog.store";

export const useCreateCarConfirmationDialogUI = () => {
    const [isCreateCarConfirmationDialogOpen, setCreateCarConfirmationDialogIsOpen] = useRecoilState(createCarConfirmationDialogIsOpen);
    const setCreateCarDialogIsOpen = useSetRecoilState(createCarDialogIsOpen);

    const onCreateCarConfirmationDialogConfirmHandler = () => {
        setCreateCarConfirmationDialogIsOpen(false);
        setCreateCarDialogIsOpen(false)
    }

    const onCreateCarConfirmationDialogCancelHandler = () => {
        setCreateCarConfirmationDialogIsOpen(false);
    }

    return {
        isCreateCarConfirmationDialogOpen,
        onCreateCarConfirmationDialogConfirmHandler,
        onCreateCarConfirmationDialogCancelHandler
    } as const;
}
