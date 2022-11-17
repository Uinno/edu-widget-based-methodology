'use client'

import {useRouter} from "next/navigation";
import {useRecoilCallback} from "recoil";
import {editCarDialogErrorState, editCarDialogId, editCarDialogIsProcessing} from "../store/EditCarDialog.store";

export const useDeleteCarMutation = () => {
    const router = useRouter();

    return useRecoilCallback(({set, reset, snapshot}) => async () => {
        try {
            const carId = await snapshot.getPromise(editCarDialogId)
            set(editCarDialogIsProcessing, true)
            const response = await fetch(`http://localhost:3001/cars/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) {
                set(editCarDialogErrorState, response.statusText);
                return;
            }
            router.refresh();
            reset(editCarDialogId)

        } catch (e) {
            throw e
        } finally {
            set(editCarDialogIsProcessing, false)
        }
    }, [])
}
