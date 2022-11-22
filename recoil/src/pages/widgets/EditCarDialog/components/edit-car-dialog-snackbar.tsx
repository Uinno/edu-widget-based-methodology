import {Alert, Snackbar} from "@mui/material";
import {useEditCarDialogError} from "../hooks/useEditCarDialogError";

export const EditCarDialogSnackbar = () => {
    const {editCarDialogError, removeEditCarDialogError} = useEditCarDialogError();

    return (
        <Snackbar
            open={!!editCarDialogError}
            autoHideDuration={2000}
            onClose={removeEditCarDialogError}
            onClick={removeEditCarDialogError}
        >
            <Alert severity="error"> {editCarDialogError} </Alert>
        </Snackbar>
    )
}
