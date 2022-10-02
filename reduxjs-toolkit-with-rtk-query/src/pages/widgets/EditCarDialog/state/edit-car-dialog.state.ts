import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {editCarDialogForceClose} from "../store/edit-car-dialog.store";
import {selectEditCarDialogIsOpenById} from "../store/edit-car-dialog.selectors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useDeleteCarMutation, useEditCarMutation, useFetchCarQuery} from "../store/edit-car-dialog.api";
import {areObjectsEqual} from "../../../../utils/areObjectsEqual";
import {openEditCarConfirmationDialog} from "../../EditCarConfirmationDialog/store/edit-car-confirmation-dialog.store";

export type EditCarDialogWidgetProps = {
    id: number;
}

type EditCarDialogForm = {
    brand: string;
    model: string;
    year: number;
}

const schema = yup.object({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required()
});

/**
 * It's unnecessary to move the widget state to the separate file
 * but here we've done it to provide the better readability.
 *
 * @param id
 */
export const useEditCarDialogWidgetState = ({id}: EditCarDialogWidgetProps) => {
    const dispatch = useAppDispatch();

    const {data, isLoading, error} = useFetchCarQuery({id});
    const [editCar, {isLoading: editCarLoading, error: editCarError}] = useEditCarMutation();
    const [deleteCar, {isLoading: deleteCarLoading, error: deleteCarError}] = useDeleteCarMutation();
    const [networkError, setNetworkError] = useState<string | null>(null);
    const loading = isLoading || editCarLoading || deleteCarLoading;
    useEffect(() => {
        const computedError = error || editCarError || deleteCarError;
        if (computedError) {
            setNetworkError('Server Error')
        }
    }, [error, editCarError, deleteCarError])
    const onSnackbarCloseHandler = () => setNetworkError(null);

    const open = useAppSelector(selectEditCarDialogIsOpenById(id));

    const {register, handleSubmit, formState: {errors}, reset, getValues} = useForm<EditCarDialogForm>({
        defaultValues: {...data},
        resolver: yupResolver(schema)
    });

    const onCloseHandler = () => {
        if (isLoading) {
            return;
        }
        const {id, ...carData} = data || {};
        const isConfirmationNeeded = !areObjectsEqual(carData, getValues());
        if (isConfirmationNeeded) {
            return dispatch(openEditCarConfirmationDialog())
        }
        dispatch(editCarDialogForceClose())
        reset()
    }

    const onDeleteHandler = () => deleteCar({id})
        .then((response) => {
            if (!('error' in response)) {
                dispatch(editCarDialogForceClose())
            }
        });

    const onSubmitHandler = handleSubmit((data) => {
        editCar({...data, id}).then((response) => {
            if (!('error' in response)) {
                dispatch(editCarDialogForceClose())
            }
        });
    })

    return {
        initialState: data,
        loading,
        open,
        onCloseHandler,
        onDeleteHandler,
        onSnackbarCloseHandler,
        register,
        errors,
        onSubmitHandler,
        networkError
    }
}
