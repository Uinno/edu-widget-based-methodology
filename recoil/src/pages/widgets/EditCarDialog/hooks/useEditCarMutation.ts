import {useRecoilCallback} from "recoil";
import {UseFormHandleSubmit} from "react-hook-form";
import {
    editCarDialogErrorState,
    editCarDialogId,
    editCarDialogInitialState,
    editCarDialogIsDirty,
    editCarDialogIsProcessing
} from "../store/edit-car-dialog.store";
import {EditCarDialogForm} from "./useEditCarDialogForm";
import {carListQuery} from "../../../CarsList/widgets/CarList/store/car-list.store";

export const useEditCarMutation = (handleSubmit: UseFormHandleSubmit<EditCarDialogForm>) => {

    return useRecoilCallback(({refresh, set, snapshot}) => handleSubmit(async (data) => {
        const isDirty = await snapshot.getPromise(editCarDialogIsDirty);

        if (!isDirty) {
            set(editCarDialogId, null);
        }

        try {
            const carId  = await snapshot.getPromise(editCarDialogId);
            set(editCarDialogIsProcessing, true);
            const result = await fetch(`http://localhost:3000/cars/${carId}`, {
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
            refresh(editCarDialogInitialState);
            refresh(carListQuery);
            setTimeout(() => {
                set(editCarDialogId, null);
            })

        } catch (e) {
            console.error(e)
        } finally {
            set(editCarDialogIsProcessing, false)
        }
    }), [])
}
