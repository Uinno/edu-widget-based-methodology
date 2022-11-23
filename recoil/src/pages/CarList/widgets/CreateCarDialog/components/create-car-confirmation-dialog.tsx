import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {useCreateCarConfirmationDialogUI} from "../hooks/useCreateCarConfirmationDialogUI";

const useCreateCarConfirmationDialogWidgetState = () => {
    const {
        onCreateCarConfirmationDialogConfirmHandler,
        onCreateCarConfirmationDialogCancelHandler,
        isCreateCarConfirmationDialogOpen
    } = useCreateCarConfirmationDialogUI();

    return {
        open: isCreateCarConfirmationDialogOpen,
        onCloseHandler: onCreateCarConfirmationDialogCancelHandler,
        onConfirmHandler: onCreateCarConfirmationDialogConfirmHandler
    }
}

export const CreateCarConfirmationDialog = () => {
    const {open, onCloseHandler, onConfirmHandler} = useCreateCarConfirmationDialogWidgetState();

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
