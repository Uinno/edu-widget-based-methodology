import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {closeCreateCarConfirmationDialog} from "./store/create-car-confirmation-dialog.store";
import {confirmCloseCreateCarDialog} from "./store/create-car-confirmation-dialog.thunks";
import {selectCreateCarDialogConfirmationOpen} from "./store/create-car-confirmation-dialog.selectors";

const useEditCarConfirmationDialogWidgetState = () => {
    const dispatch = useAppDispatch();

    const open = useAppSelector(selectCreateCarDialogConfirmationOpen)
    const onCloseHandler = () => dispatch(closeCreateCarConfirmationDialog());
    const onConfirmHandler = () => dispatch(confirmCloseCreateCarDialog());

    return {
        open,
        onCloseHandler,
        onConfirmHandler
    }
}

export const CreateCarConfirmationDialogWidget = () => {
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
