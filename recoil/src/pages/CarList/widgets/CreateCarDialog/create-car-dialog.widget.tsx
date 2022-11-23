import {Dialog, DialogTitle} from "@mui/material";
import {CreateCarConfirmationDialog} from "./components/create-car-confirmation-dialog";
import {CreateCarDialogContent} from "./components/create-car-dialog-content";
import {CreateCarDialogSnackbar} from "./components/create-car-dialog-snackbar";
import {useCreateCarDialogUI} from "./hooks/useCreateCarDialogUI";


export const CreateCarDialogWidget = () => {
    const {isCreateCarDialogOpen, onCreateCarDialogCloseHandler} = useCreateCarDialogUI();

    return (
        <>
            <CreateCarDialogSnackbar/>
            <Dialog open={isCreateCarDialogOpen} onClose={onCreateCarDialogCloseHandler}>
                <DialogTitle>Create Car</DialogTitle>
                <CreateCarDialogContent/>
            </Dialog>
            <CreateCarConfirmationDialog/>
        </>
    )
}
