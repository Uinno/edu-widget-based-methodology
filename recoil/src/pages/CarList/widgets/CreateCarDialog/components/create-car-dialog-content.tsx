import {DialogActions, DialogContent, FormGroup, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useCreateCarDialogForm} from "../hooks/useCreateCarDialogForm";
import {useCreateCarMutation} from "../hooks/useCreateCarMutation";
import {useCreateCarDialogContentUI} from "../hooks/useCreateCarDialogContentUI";

const useCreateCarDialogContentState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
    } = useCreateCarDialogForm();

    const onSubmitHandler = useCreateCarMutation(handleSubmit, isDirty);

    const {areControlsDisabled} = useCreateCarDialogContentUI();

    return {
        register,
        errors,
        onSubmitHandler,
        areControlsDisabled,
    } as const;
}


export const CreateCarDialogContent = () => {

    const {
        register,
        errors,
        onSubmitHandler,
        areControlsDisabled
    } = useCreateCarDialogContentState();

    return (
        <>
            <DialogContent>
                <form id="create-car-form">
                    <FormGroup sx={{padding: '10px 0', minWidth: '400px', maxWidth: '400px'}}>
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
                <Button disabled={areControlsDisabled} onClick={onSubmitHandler} type="submit" form="create-car-form">
                    Create
                </Button>
            </DialogActions>
        </>
    )
}
