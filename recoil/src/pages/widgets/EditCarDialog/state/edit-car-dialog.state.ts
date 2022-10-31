import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useRecoilCallback, useRecoilValue, useRecoilValueLoadable} from "recoil";
import {
    editCarDialogAction,
    editCarDialogIsLoadingAtom,
    editCarDialogNetworkErrorAtom,
    editCarDialogOpened
} from "../store/edit-car-dialog.store";
import {
    useDeleteCarMutation,
    useEditCarDialogCloseHandler,
    useEditCarDialogReset,
    useEditCarMutation
} from "../store/edit-car-dialog.usecase";

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
})

/**
 * It's unnecessary to move the widget state to the separate file
 * but here we've done it to provide the better readability.
 *
 * @param id
 */
export const useEditCarDialogWidgetState = ({id}: EditCarDialogWidgetProps) => {

    const initialState = {brand: "", year: 1, model: ""};
    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
        reset: editCarDialogFormReset,
    } = useForm<EditCarDialogForm>({
        defaultValues: initialState,
        resolver: yupResolver(schema)
    });

    const editCarDialogIsLoading = useRecoilValue(editCarDialogIsLoadingAtom);
    const open = useRecoilValue(editCarDialogOpened(id));

    const editCarDialogCloseHandler = useEditCarDialogCloseHandler();
    const editCarDialogResetHandler = useEditCarDialogReset();
    const onSnackbarCloseHandler = useRecoilCallback(({reset}) => () => {
        reset(editCarDialogNetworkErrorAtom)
    })
    const networkError = useRecoilValue(editCarDialogNetworkErrorAtom);

    const editCar = useEditCarMutation();
    const deleteCar = useDeleteCarMutation();
    const loading = editCarDialogIsLoading;

    // const onSubmitHandler = handleSubmit((data) => {
    //     editCar({...data, id})
    //         .then(() => {
    //             editCarDialogFormReset();
    //             editCarDialogResetHandler();
    //         })
    // })

    const onSubmitHandler = useRecoilCallback(({set}) => () => {
        set(editCarDialogAction, 'save')
    })

    const onDeleteHandler = () => {
        deleteCar(id)
            .then(() => {
                editCarDialogFormReset();
                editCarDialogResetHandler();
            })
    };

    const onCloseHandler = () => {
        if(loading){
            return;
        }
        editCarDialogCloseHandler(isDirty)
            .then((isClosing) => {
                if (isClosing) {
                    editCarDialogFormReset();
                    editCarDialogResetHandler();
                }
            })
    }

    return {
        initialState: initialState,
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
