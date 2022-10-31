import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {
    createCarDialogIsLoadingAtom,
    createCarDialogNetworkErrorAtom,
    createCarDialogOpenAtom,
} from "../store/create-car-dialog.store";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {
    useCreateCarDialogCloseHandler,
    useCreateCarDialogReset,
    useCreateCarMutation
} from "../store/create-car-dialog.usecase";

type CreateCarDialogForm = {
    brand: string;
    model: string;
    year: number;
}

const schema = yup.object({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number()
}).default(() => ({
    brand: "",
    model: "",
    year: "",
}));


/**
 * It's unnecessary to move the widget state to the separate file
 * but here we've done it to provide the better readability.
 *
 */
export const useCreateCarDialogWidgetState = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isDirty},
        reset: createCarDialogFormReset,
    } = useForm<CreateCarDialogForm>({
        resolver: yupResolver(schema),
        defaultValues: schema.getDefault()
    });

    const loading = useRecoilValue(createCarDialogIsLoadingAtom);
    const open = useRecoilValue(createCarDialogOpenAtom);

    const createCarDialogCloseHandler = useCreateCarDialogCloseHandler(isDirty);
    const createCarDialogResetHandler = useCreateCarDialogReset();

    const onSnackbarCloseHandler = useRecoilCallback(({reset}) => () => {
        reset(createCarDialogNetworkErrorAtom)
    })

    const onCloseHandler = () => {
        createCarDialogCloseHandler().then(() => createCarDialogFormReset())
    }

    const networkError = useRecoilValue(createCarDialogNetworkErrorAtom);

    const createCar = useCreateCarMutation();

    const onSubmitHandler = handleSubmit((data) => {
        createCar(data).then(() => {
            createCarDialogFormReset()
            createCarDialogResetHandler()
        });
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
