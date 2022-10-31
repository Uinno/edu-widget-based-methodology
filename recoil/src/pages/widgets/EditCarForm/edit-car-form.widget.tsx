import {FormGroup, Hidden, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useRecoilValue} from "recoil";
import {editCarDialogInitialState} from "./store/edit-car-form.store";
import {useEditCarMutation} from "../EditCarDialog/store/edit-car-dialog.usecase";

type EditCarDialogForm = {
    id: number;
    brand: string;
    model: string;
    year: number;
}

const schema = yup.object({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required()
});


const useEditCarFormWidgetState = () => {
    const initialState = useRecoilValue(editCarDialogInitialState);

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
    } = useForm<EditCarDialogForm>({
        defaultValues: {...initialState},
        resolver: yupResolver(schema)
    });

    const editCar = useEditCarMutation();

    const onSubmitHandler = handleSubmit((data) => {
        editCar(data);
    })

    return {
        register,
        errors,
        onSubmitHandler
    }
}

export const EditCarFormWidget = () => {
    const {register, errors, onSubmitHandler} = useEditCarFormWidgetState();

    return (
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
    )

}
