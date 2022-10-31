import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {
    useCreateCarConfirmationDialogClose,
    useCreateCarConfirmationDialogOpenState
} from "./store/create-car-confirmation-dialog.usecase";
import {useCreateCarDialogReset} from "../CreateCarDialog/store/create-car-dialog.usecase";

const useCreateCarConfirmationDialogWidgetState = () => {
    const createCarDialogReset = useCreateCarDialogReset();
    const createCarConfirmationDialogClose = useCreateCarConfirmationDialogClose();
    const open = useCreateCarConfirmationDialogOpenState()

    const onConfirmHandler = () => {
        createCarConfirmationDialogClose();
        createCarDialogReset()
    }

    return {
        open,
        onCloseHandler: createCarConfirmationDialogClose,
        onConfirmHandler
    }
}

export const CreateCarConfirmationDialogWidget = () => {
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
