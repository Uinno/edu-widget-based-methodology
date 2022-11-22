import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {useEditCarConfirmationDialogUI} from "../hooks/useEditCarConfirmationDialogUI";

export const EditCarConfirmationDialog = () => {
    const {
        onConfirmationDialogConfirmHandler,
        onConfirmationDialogCancelHandler,
        isConfirmationDialogOpen
    } = useEditCarConfirmationDialogUI();

    return (
        <Dialog open={isConfirmationDialogOpen} onClose={onConfirmationDialogCancelHandler}>
            <DialogTitle>
                Confirm
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You have the unsaved changes, please confirm that you want to close the dialog.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="warning" onClick={onConfirmationDialogCancelHandler}>
                    Cancel
                </Button>
                <Button onClick={onConfirmationDialogConfirmHandler}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}
