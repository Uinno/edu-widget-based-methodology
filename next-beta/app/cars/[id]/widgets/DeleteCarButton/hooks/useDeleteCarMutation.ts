'use client'

import {useRouter} from "next/navigation";
import {useSetRecoilState} from "recoil";
import {
    deleteCarButtonConfirmationDialogId,
    deleteCarButtonConfirmationDialogIsProcessing
} from "../store/DeleteCarButton.store";

export const useDeleteCarMutation = (carId: string) => {
    const router = useRouter();
    const setDeleteCarButtonConfirmationDialogIsProcessing = useSetRecoilState(deleteCarButtonConfirmationDialogIsProcessing);
    const setDeleteCarButtonConfirmationDialogId = useSetRecoilState(deleteCarButtonConfirmationDialogId);

    return async () => {
        try {
            setDeleteCarButtonConfirmationDialogIsProcessing(true);
            const response = await fetch(`http://localhost:3001/cars/${carId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) return;
            router.push("/");
            router.refresh();
            setDeleteCarButtonConfirmationDialogId(null);

        } catch (e) {
            throw e
        } finally {
            setDeleteCarButtonConfirmationDialogIsProcessing(false);
        }
    }
}
