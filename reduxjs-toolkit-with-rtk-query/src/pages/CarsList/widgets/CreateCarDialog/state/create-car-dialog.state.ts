import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {createCarDialogForceClose} from "../store/create-car-dialog.store";
import {selectCreateCarDialogIsOpen} from "../store/create-car-dialog.selectors";
import {useCreateCarMutation} from "../store/create-car-dialog.api";
import {areObjectValuesFalsy} from "../../../../../utils/areObjectValuesFalsy";
import {
    openCreateCarConfirmationDialog
} from "../../CreateCarConfirmationDialog/store/create-car-confirmation-dialog.store";

export type CreateCarDialogWidgetProps = {
}

type CreateCarDialogForm = {
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
 */
export const useCreateCarDialogWidgetState = () => {
    const dispatch = useAppDispatch();

    const [createCar, {isLoading, error}] = useCreateCarMutation();
    const [networkError, setNetworkError] = useState<string | null>(null)
    useEffect(() => {
        if (error) {
            setNetworkError('Server Error')
        }
    }, [error])
    const onSnackbarCloseHandler = () => setNetworkError(null);

    const {register, handleSubmit, formState: {errors}, reset, getValues} = useForm<CreateCarDialogForm>({
        resolver: yupResolver(schema)
    });

    const open = useAppSelector(selectCreateCarDialogIsOpen);

    const onCloseHandler = () => {
        if (isLoading) {
            return;
        }
        const isConfirmationNeeded = !areObjectValuesFalsy(getValues());
        if (isConfirmationNeeded) {
            return dispatch(openCreateCarConfirmationDialog())
        }
        dispatch(createCarDialogForceClose())
        reset()
    }


    const onSubmitHandler = handleSubmit((data) => {
        createCar(data).then((response) => {
            if(!('error' in response)){
                dispatch(createCarDialogForceClose())
                reset();
            }
        });
    })

    return {
        open,
        onCloseHandler,
        onSnackbarCloseHandler,
        loading: isLoading,
        register,
        errors,
        onSubmitHandler,
        networkError
    }
}
