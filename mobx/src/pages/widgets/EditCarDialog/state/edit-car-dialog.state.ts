import * as yup from "yup";
import {useForm, UseFormReset, UseFormWatch} from "react-hook-form";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {editCarDialogNetworkErrorCleared, setEditCarDialogFormData} from "../store/edit-car-dialog.store";
import {
    selectEditCarDialogFormData,
    selectEditCarDialogInitialState,
    selectEditCarDialogIsOpenById,
    selectEditCarDialogLoading,
    selectEditCarDialogNetworkError
} from "../store/edit-car-dialog.selectors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {deleteCar, editCar, setEditCarDialogClose} from "../store/edit-car-dialog.thunks";

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
 * Reset form state in case of closing dialog window.
 * It will be redundant if we use other dialog handling system
 * or unmount this component when dialog closed.
 *
 * @param reset
 */
const useResetFormState = (reset: UseFormReset<EditCarDialogForm>) => {
    const formData = useAppSelector(selectEditCarDialogFormData);
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
const useFormToStoreSubscription = (watch: UseFormWatch<EditCarDialogForm>) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        watch((data) => {
            dispatch(setEditCarDialogFormData(data));
        })
    }, [])
}


/**
 * It's unnecessary to move the widget state to the separate file
 * but here we've done it to provide the better readability.
 *
 * @param id
 */
export const useEditCarDialogWidgetState = ({id}: EditCarDialogWidgetProps) => {
    const dispatch = useAppDispatch();

    const initialState = useAppSelector(selectEditCarDialogInitialState);
    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<EditCarDialogForm>({
        defaultValues: {...initialState},
        resolver: yupResolver(schema)
    });

    useResetFormState(reset);
    useFormToStoreSubscription(watch);

    const loading = useAppSelector(selectEditCarDialogLoading);
    const open = useAppSelector(selectEditCarDialogIsOpenById(id));

    const onCloseHandler = () => dispatch(setEditCarDialogClose())
    const onDeleteHandler = () => dispatch(deleteCar({id}));
    const onSnackbarCloseHandler = () => dispatch(editCarDialogNetworkErrorCleared());
    const networkError = useAppSelector(selectEditCarDialogNetworkError);

    const onSubmitHandler = handleSubmit((data) => {
        dispatch(editCar({...data, id}));
    })

    return {
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
    }
}
