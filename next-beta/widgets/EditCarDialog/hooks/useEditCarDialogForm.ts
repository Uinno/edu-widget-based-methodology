'use client'

import {useRecoilValue, useSetRecoilState} from "recoil";
import {editCarDialogInitialState, editCarDialogIsDirty} from "../store/EditCarDialog.store";
import {useForm} from "react-hook-form";
import {EditCarDialogForm} from "../types/EditCarDialog.types";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useEffect} from "react";

const schema = yup.object({
    brand: yup.string().required().min(1),
    model: yup.string().required().min(1),
    year: yup.number().required().min(4)
});


export const useEditCarDialogForm = () => {
    const initialState = useRecoilValue(editCarDialogInitialState);
    const setEditCarDialogIsDirty = useSetRecoilState(editCarDialogIsDirty);

    const methods = useForm<EditCarDialogForm>({
        defaultValues: {...initialState},
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        setEditCarDialogIsDirty(methods.formState.isDirty);
    }, [methods.formState.isDirty, setEditCarDialogIsDirty])


    return methods;
}
