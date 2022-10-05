import * as yup from "yup";
import {useForm, UseFormReset, UseFormWatch} from "react-hook-form";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {createCarDialogNetworkErrorCleared, setCreateCarDialogFormData} from "../store/create-car-dialog.store";
import {
    selectCreateCarDialogFormData,
    selectCreateCarDialogIsLoading,
    selectCreateCarDialogIsOpen,
    selectCreateCarDialogNetworkError
} from "../store/create-car-dialog.selectors";
import {createCar, setCreateCarDialogClose} from "../store/create-car-dialog.thunks";

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
 * Reset form state in case of closing dialog window.
 * It will be redundant if we use other dialog handling system
 * or unmount this component when dialog closed.
 *
 * @param reset
 */
const useResetFormState = (reset: UseFormReset<CreateCarDialogForm>) => {
    const formData = useAppSelector(selectCreateCarDialogFormData);
    useEffect(() => {
        if (formData === null) {
            reset()
        }
        /**
         * Such an approach is needed to run effect only when
         * initial state changes from null to object and vice versa
         * instead of running on every initial state reference changes
         */
    }, [formData === null]) // [true | false]
}

/**
 * Subscribe the form changes and sync them with Store.
 * It's needed to check the unsaved changes in the form
 * and show the confirmation dialog
 * @param watch
 */
const useFormToStoreSubscription = (watch: UseFormWatch<CreateCarDialogForm>) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        watch((data) => {
            dispatch(setCreateCarDialogFormData(data));
        })
    }, [])
}


/**
 * It's unnecessary to move the widget state to the separate file
 * but here we've done it to provide the better readability.
 *
 */
export const useCreateCarDialogWidgetState = () => {
    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<CreateCarDialogForm>({
        resolver: yupResolver(schema)
    });

    useResetFormState(reset);
    useFormToStoreSubscription(watch);

    const loading = useAppSelector(selectCreateCarDialogIsLoading);
    const open = useAppSelector(selectCreateCarDialogIsOpen);

    const onCloseHandler = () => dispatch(setCreateCarDialogClose())
    const onSnackbarCloseHandler = () => dispatch(createCarDialogNetworkErrorCleared());

    const networkError = useAppSelector(selectCreateCarDialogNetworkError);

    const onSubmitHandler = handleSubmit((data) => {
        dispatch(createCar(data));
    })

    return {
        open,
        onCloseHandler,
        onSnackbarCloseHandler,
        loading,
        register,
        errors,
        onSubmitHandler,
        networkError
    }
}
