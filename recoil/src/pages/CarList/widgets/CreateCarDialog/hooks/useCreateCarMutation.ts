import {useRecoilCallback} from "recoil";
import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";
import {CreateCarDialogForm} from "./useCreateCarDialogForm";
import {
    createCarDialogErrorState,
    createCarDialogIsOpen,
    createCarDialogIsProcessing
} from "../store/create-car-dialog.store";
import {carListQuery} from "../../CarList/store/car-list.store";

export const useCreateCarMutation = (handleSubmit: UseFormHandleSubmit<CreateCarDialogForm>, isDirty: boolean) => {
    return useRecoilCallback(({set, refresh}) => handleSubmit(async (data) => {
        if (!isDirty) {
            set(createCarDialogIsOpen,false);
        }

        try {
            set(createCarDialogIsProcessing,true);
            const response = await fetch("http://localhost:3000/cars", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){
                return set(createCarDialogErrorState, response.statusText)
            }
            set(createCarDialogIsOpen,false);
            refresh(carListQuery);
        } catch (e) {
            console.log("ERROR", e)
        } finally {
            set(createCarDialogIsProcessing, false);
        }
    }), [])

}
