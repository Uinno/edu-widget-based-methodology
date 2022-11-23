'use client'

import {useRecoilCallback} from "recoil";
import {editCarDialogErrorState, editCarDialogId, editCarDialogIsProcessing} from "../store/edit-car-dialog.store";

export const useDeleteCarMutation = () => {
    return useRecoilCallback(({set, reset, snapshot}) => async () => {
        try {
            const carId = await snapshot.getPromise(editCarDialogId)
            set(editCarDialogIsProcessing, true)
            const response = await fetch(`http://localhost:3000/cars/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) {
                set(editCarDialogErrorState, response.statusText);
                return;
            }
            reset(editCarDialogId)

        } catch (e) {
            throw e
        } finally {
            set(editCarDialogIsProcessing, false)
        }
    }, [])
}
