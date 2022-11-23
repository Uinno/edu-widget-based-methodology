'use client'

import {useRecoilCallback} from "recoil";
import {editCarDialogErrorState, editCarDialogId, editCarDialogIsProcessing} from "../store/edit-car-dialog.store";
import {carListQuery} from "../../../CarList/widgets/CarList/store/car-list.store";

export const useDeleteCarMutation = () => {
    return useRecoilCallback(({set, reset, refresh, snapshot}) => async () => {
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
            refresh(carListQuery);
            reset(editCarDialogId);

        } catch (e) {
            throw e
        } finally {
            set(editCarDialogIsProcessing, false)
        }
    }, [])
}
