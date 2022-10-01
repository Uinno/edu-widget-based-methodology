import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {closeEditCarConfirmationDialog} from "./store/edit-car-confirmation-dialog.store";
import {selectEditCarDialogConfirmationOpen} from "./store/edit-car-confirmation-dialog.selectors";
import {confirmCloseEditCarDialog} from "./store/edit-car-confirmation-dialog.thunks";

const useEditCarConfirmationDialogWidgetState = () => {
    const dispatch = useAppDispatch();

    const open = useAppSelector(selectEditCarDialogConfirmationOpen)
    const onCloseHandler = () => dispatch(closeEditCarConfirmationDialog());
    const onConfirmHandler = () => dispatch(confirmCloseEditCarDialog());

    return {
        open,
        onCloseHandler,
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
