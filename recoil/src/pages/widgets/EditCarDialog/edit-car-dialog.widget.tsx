import {Dialog, DialogTitle} from "@mui/material";
import {memo, Suspense} from "react";
import {EditCarDialogContentPlaceholder} from "./components/edit-car-dialog-content-placeholder";
import {EditCarDialogContent} from "./components/edit-car-dialog-content";
import {useEditCarDialogUI} from "./hooks/useEditCarDialogUI";
import {EditCarDialogSnackbar} from "./components/edit-car-dialog-snackbar";
import {EditCarConfirmationDialog} from "./components/edit-car-confirmation-dialog";
import {EditCarDialogContentErrorBoundary} from "./components/edit-car-dialog-content-error-boundary";


export const EditCarDialogWidget = memo(() => {
    const {isEditCarDialogOpen, closeEditCarDialog} = useEditCarDialogUI()

    return (
        <>
            <EditCarDialogSnackbar/>
            <Dialog open={isEditCarDialogOpen} onClose={closeEditCarDialog}>
                <DialogTitle>Edit Car</DialogTitle>
                <EditCarDialogContentErrorBoundary>
                    <Suspense fallback={<EditCarDialogContentPlaceholder/>}>
                        <EditCarDialogContent/>
                    </Suspense>
                </EditCarDialogContentErrorBoundary>
                <EditCarConfirmationDialog/>
            </Dialog>
        </>
    )
}, () => true);
