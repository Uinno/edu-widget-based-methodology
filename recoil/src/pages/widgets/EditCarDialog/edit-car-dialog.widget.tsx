import {Alert, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from "@mui/material";
import Button from "@mui/material/Button";
import {EditCarConfirmationDialogWidget} from "../EditCarConfirmationDialog/edit-car-confirmation-dialog.widget";
import {EditCarDialogWidgetProps, useEditCarDialogWidgetState} from "./state/edit-car-dialog.state";
import {memo, Suspense} from "react";
import {EditCarFormWidget} from "../EditCarForm/edit-car-form.widget";
import {EditCarDialogFormPlaceholder} from "./components/edit-car-dialog-form-placeholder";


export const EditCarDialogWidget = memo((props: EditCarDialogWidgetProps) => {
    const {
        open,
        onCloseHandler,
        onDeleteHandler,
        onSnackbarCloseHandler,
        loading,
        onSubmitHandler,
        networkError
    } = useEditCarDialogWidgetState(props);

    return (
        <>
            <Snackbar
                open={!!networkError}
                autoHideDuration={2000}
                onClose={onSnackbarCloseHandler}
                onClick={onSnackbarCloseHandler}
            >
                <Alert severity="error">{networkError}</Alert>
            </Snackbar>
            <Dialog open={open} onClose={onCloseHandler}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <Suspense fallback={<EditCarDialogFormPlaceholder/>}>
                        <EditCarFormWidget/>
                    </Suspense>
                    <EditCarConfirmationDialogWidget/>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={onDeleteHandler} disabled={loading}>
                        Delete
                    </Button>
                    <Button disabled={loading} type="submit" form="edit-car-form">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}, (prevProps, nextProps) => prevProps.id === nextProps.id);
