'use client'


import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";
import {EditCarDialogForm} from "../types/EditCarDialog.types";
import {useRouter} from "next/navigation";
import {useRecoilCallback} from "recoil";
import {
    editCarDialogErrorState,
    editCarDialogId,
    editCarDialogInitialState,
    editCarDialogIsDirty,
    editCarDialogIsProcessing
} from "../store/EditCarDialog.store";

export const useEditCarMutation = (handleSubmit: UseFormHandleSubmit<EditCarDialogForm>) => {
    const router = useRouter();

    return useRecoilCallback(({refresh, set, snapshot}) => handleSubmit(async (data) => {
        const isDirty = await snapshot.getPromise(editCarDialogIsDirty);
        if (!isDirty) {
            set(editCarDialogId, null);
        }
        try {
            const carId  = await snapshot.getPromise(editCarDialogId);
            set(editCarDialogIsProcessing, true);
            const result = await fetch(`http://localhost:3001/cars1/${carId}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!result.ok) {
                set(editCarDialogErrorState, result.statusText);
                return;
            }
            router.refresh();
            refresh(editCarDialogInitialState);
            set(editCarDialogId, null);

        } catch (e) {
            console.error(e)
        } finally {
            set(editCarDialogIsProcessing, false)
        }
    }), [])
}
