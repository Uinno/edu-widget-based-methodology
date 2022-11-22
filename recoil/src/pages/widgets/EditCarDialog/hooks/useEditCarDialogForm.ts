'use client'

import {useRecoilValue, useSetRecoilState} from "recoil";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useEffect} from "react";
import {editCarDialogInitialState, editCarDialogIsDirty} from "../store/edit-car-dialog.store";

export type EditCarDialogForm = {
    id: number;
    brand: string;
    model: string;
    year: number;
}

const schema = yup.object({
    brand: yup.string().required().min(1),
    model: yup.string().required().min(1),
    year: yup.number().required().min(1970).max(2022)
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
