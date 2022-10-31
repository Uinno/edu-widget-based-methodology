import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {
    useEditCarConfirmationDialogClose,
    useEditCarConfirmationDialogOpenState
} from "./store/edit-car-confirmation-dialog.store";
import {useEditCarDialogReset} from "../EditCarDialog/store/edit-car-dialog.usecase";

const useEditCarConfirmationDialogWidgetState = () => {
    const editCarConfirmationDialogClose = useEditCarConfirmationDialogClose()
    const editCarDialogReset = useEditCarDialogReset();
    const open = useEditCarConfirmationDialogOpenState()
    const onConfirmHandler = () => {
        editCarConfirmationDialogClose();
        editCarDialogReset();
    };

    return {
        open,
        onCloseHandler: editCarConfirmationDialogClose,
        onConfirmHandler
    }
}

export const EditCarConfirmationDialogWidget = () => {
    const {open, onCloseHandler, onConfirmHandler} = useEditCarConfirmationDialogWidgetState();

    return (
        <Dialog open={open} onClose={onCloseHandler}>
            <DialogTitle>
                Confirm
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You have the unsaved changes, please confirm that you want to close the dialog.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="warning" onClick={onCloseHandler}>
                    Cancel
                </Button>
                <Button onClick={onConfirmHandler}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}
