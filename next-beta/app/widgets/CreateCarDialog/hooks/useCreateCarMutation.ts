import {useRecoilCallback, useSetRecoilState} from "recoil";
import {createCarDialogIsOpen, createCarDialogIsProcessing} from "../store/CreateCarDialog.store";
import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";
import {CreateCarDialogForm} from "../types/CreateCarDialog.types";
import {useRouter} from "next/navigation";

export const useCreateCarMutation = (handleSubmit: UseFormHandleSubmit<CreateCarDialogForm>, isDirty: boolean) => {
    const router = useRouter();
    const setCreateCarDialogIsOpen = useSetRecoilState(createCarDialogIsOpen);
    const setCreateCarDialogIsProcessing = useSetRecoilState(createCarDialogIsProcessing);

    return useRecoilCallback(({set}) => handleSubmit(async (data) => {
        if (!isDirty) {
            setCreateCarDialogIsOpen(false);
        }

        try {
            setCreateCarDialogIsProcessing(true);
            await fetch("http://localhost:3001/cars", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            router.refresh();
            setCreateCarDialogIsOpen(false);
        } catch (e) {
            console.log("ERROR", e)
        } finally {
            setCreateCarDialogIsProcessing(false);
        }
    }), [])

}
