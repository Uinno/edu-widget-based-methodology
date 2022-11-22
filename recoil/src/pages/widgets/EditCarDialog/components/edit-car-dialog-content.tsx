import {DialogActions, DialogContent, FormGroup, Hidden, TextField} from "@mui/material";
import {useEditCarMutation} from "../hooks/useEditCarMutation";
import {useEditCarDialogForm} from "../hooks/useEditCarDialogForm";
import {useDeleteCarMutation} from "../hooks/useDeleteCarMutation";
import {useEditCarDialogContentUI} from "../hooks/useEditCarDialogContentUI";
import Button from "@mui/material/Button";


const useEditCarFormWidgetState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useEditCarDialogForm();

    const onSubmitHandler = useEditCarMutation(handleSubmit);
    const onDeleteHandler = useDeleteCarMutation();

    const {areControlsDisabled} = useEditCarDialogContentUI();

    return {
        register,
        errors,
        onSubmitHandler,
        onDeleteHandler,
        areControlsDisabled,
    } as const;
}

export const EditCarDialogContent = () => {
    const {register, errors, onSubmitHandler, onDeleteHandler, areControlsDisabled} = useEditCarFormWidgetState();

    return (
        <>
            <DialogContent>
                <form id="edit-car-form" onSubmit={onSubmitHandler}>
                    <FormGroup sx={{padding: '10px 0', minWidth: '400px', maxWidth: '400px'}}>
                        <Hidden xsUp>
                            <TextField {...register('id')} hidden={true}/>
                        </Hidden>
                        <TextField
                            {...register('brand')}
                            label="Brand"
                            error={!!errors['brand']}
                            helperText={errors['brand']?.message}
                            sx={{margin: '10px 0'}}
                            disabled={areControlsDisabled}
                        />
                        <TextField
                            {...register('model')}
                            label="Model"
                            error={!!errors['model']}
                            helperText={errors['model']?.message}
                            sx={{margin: '10px 0'}}
                            disabled={areControlsDisabled}
                        />
                        <TextField
                            {...register('year')}
                            label="Year"
                            error={!!errors['year']}
                            helperText={errors['year']?.message}
                            sx={{margin: '10px 0'}}
                            disabled={areControlsDisabled}
                        />
                    </FormGroup>
                </form>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={onDeleteHandler} disabled={areControlsDisabled}>
                    Delete
                </Button>
                <Button disabled={areControlsDisabled} type="submit" form="edit-car-form">
                    Save
                </Button>
            </DialogActions>
        </>
    )
}
