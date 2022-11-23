import {Alert, Snackbar} from "@mui/material";
import {useCreateCarDialogError} from "../hooks/useCreateCarDialogError";

export const CreateCarDialogSnackbar = () => {
    const {
        createCarDialogError,
        removeCreateCarDialogError
    } = useCreateCarDialogError()

    return (
        <Snackbar
            open={!!createCarDialogError}
            autoHideDuration={2000}
            onClose={removeCreateCarDialogError}
            onClick={removeCreateCarDialogError}
        >
            <Alert severity="error">{createCarDialogError}</Alert>
        </Snackbar>
    )
}
