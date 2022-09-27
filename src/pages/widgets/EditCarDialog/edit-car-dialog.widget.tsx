import {
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormGroup,
    Skeleton,
    Snackbar,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {EditCarConfirmationDialogWidget} from "../EditCarConfirmationDialog/edit-car-confirmation-dialog.widget";
import {EditCarDialogWidgetProps, useEditCarDialogWidgetState} from "./state/edit-car-dialog.state";

export const EditCarDialogWidget = (props: EditCarDialogWidgetProps) => {
    const {
        initialState,
        open,
        onCloseHandler,
        onDeleteHandler,
        onSnackbarCloseHandler,
        loading,
        register,
        errors,
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
                    {loading && (<>
                        <Skeleton variant="rectangular" width={400} height={60}
                                  sx={{margin: '10px 0', minWidth: '400px'}}/>
                        <Skeleton variant="rectangular" width={400} height={60}
                                  sx={{margin: '10px 0', minWidth: '400px'}}/>
                        <Skeleton variant="rectangular" width={400} height={60}
                                  sx={{margin: '10px 0', minWidth: '400px'}}/>
                    </>)}
                    {initialState && !loading && <form id="edit-car-form">
                        <FormGroup sx={{padding: '10px 0', minWidth: '400px', maxWidth: '400px'}}>
                            <TextField
                                defaultValue={initialState.brand}
                                {...register('brand')}
                                label="Brand"
                                error={!!errors['brand']}
                                helperText={errors['brand']?.message}
                                sx={{margin: '10px 0'}}
                            />
                            <TextField
                                defaultValue={initialState.model}
                                {...register('model')}
                                label="Model"
                                error={!!errors['model']}
                                helperText={errors['model']?.message}
                                sx={{margin: '10px 0'}}
                            />
                            <TextField
                                defaultValue={initialState.year}
                                {...register('year')}
                                label="Year"
                                error={!!errors['year']}
                                helperText={errors['year']?.message}
                                sx={{margin: '10px 0'}}
                            />
                        </FormGroup>
                    </form>}
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={onDeleteHandler} disabled={loading}>
                        Delete
                    </Button>
                    <Button disabled={loading} onClick={onSubmitHandler} type="submit" form="edit-car-form">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <EditCarConfirmationDialogWidget/>
        </>
    )
}
