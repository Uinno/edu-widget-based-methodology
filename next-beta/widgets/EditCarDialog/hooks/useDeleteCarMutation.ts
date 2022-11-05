'use client'

import {useRouter} from "next/navigation";
import {useRecoilState, useSetRecoilState} from "recoil";
import {editCarDialogId, editCarDialogIsProcessing} from "../store/EditCarDialog.store";

export const useDeleteCarMutation = () => {
    const router = useRouter();
    const [carId, setCarId] = useRecoilState(editCarDialogId);
    const setEditCarDialogIsProcessing = useSetRecoilState(editCarDialogIsProcessing);

    return async () => {
        try {
            setEditCarDialogIsProcessing(true)
            const response = await fetch(`http://localhost:3001/cars1/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) return;
            router.refresh();
            setCarId(null)

        } catch (e) {
            throw e
        } finally {
            setEditCarDialogIsProcessing(false)
        }
    }
}
