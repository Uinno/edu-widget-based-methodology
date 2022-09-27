import {Alert, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, Snackbar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {CreateCarConfirmationDialogWidget} from "../CreateCarConfirmationDialog/create-car-confirmation-dialog.widget";
import {CreateCarDialogWidgetProps, useCreateCarDialogWidgetState} from "./state/create-car-dialog.state";


export const CreateCarDialogWidget = (props: CreateCarDialogWidgetProps) => {
    const {
        open,
        onCloseHandler,
        onSubmitHandler,
        register,
        errors,
        networkError,
        onSnackbarCloseHandler
    } = useCreateCarDialogWidgetState(props);

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
                <DialogTitle>Create Car</DialogTitle>
                <DialogContent>
                    <form id="create-car-form">
                        <FormGroup sx={{padding: '10px 0', minWidth: '400px', maxWidth: '400px'}}>
                            <TextField
                                {...register('brand')}
                                label="Brand"
                                error={!!errors['brand']}
                                helperText={errors['brand']?.message}
                                sx={{margin: '10px 0'}}
                            />
                            <TextField
                                {...register('model')}
                                label="Model"
                                error={!!errors['model']}
                                helperText={errors['model']?.message}
                                sx={{margin: '10px 0'}}
                            />
                            <TextField
                                {...register('year')}
                                label="Year"
                                error={!!errors['year']}
                                helperText={errors['year']?.message}
                                sx={{margin: '10px 0'}}
                            />
                        </FormGroup>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSubmitHandler} type="submit" form="create-car-form">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <CreateCarConfirmationDialogWidget/>
        </>
    )
}
