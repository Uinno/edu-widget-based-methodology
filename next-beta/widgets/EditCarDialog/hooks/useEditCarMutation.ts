'use client'


import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";
import {EditCarDialogForm} from "../types/EditCarDialog.types";
import {useRouter} from "next/navigation";
import {useRecoilCallback, useRecoilState, useSetRecoilState} from "recoil";
import {editCarDialogId, editCarDialogInitialState, editCarDialogIsProcessing} from "../store/EditCarDialog.store";

export const useEditCarMutation = (handleSubmit: UseFormHandleSubmit<EditCarDialogForm>, isDirty: boolean) => {
    const router = useRouter();
    const [carId, setCarId] = useRecoilState(editCarDialogId);
    const setEditCarDialogIsProcessing = useSetRecoilState(editCarDialogIsProcessing);

    return useRecoilCallback(({refresh}) => handleSubmit(async (data) => {
        if (!isDirty) {
            setCarId(null)
        }
        try {
            setEditCarDialogIsProcessing(true)
            await fetch(`http://localhost:3001/cars/${carId}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            router.refresh();
            refresh(editCarDialogInitialState);
            setCarId(null);

        } catch (e) {
            console.error(e)
        } finally {
            setEditCarDialogIsProcessing(false)
        }
    }))
}
