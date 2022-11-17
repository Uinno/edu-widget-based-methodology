import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    deleteCarButtonConfirmationDialogId,
    deleteCarButtonConfirmationDialogIsOpen,
    deleteCarButtonConfirmationDialogIsProcessing
} from "../store/DeleteCarButton.store";

export const useDeleteCarConfirmationDialogUI = (id: string) => {
    const isDeleteCarButtonConfirmationDialogOpen= useRecoilValue(deleteCarButtonConfirmationDialogIsOpen(id));
    const setDeleteCarButtonConfirmationDialogId = useSetRecoilState(deleteCarButtonConfirmationDialogId);
    const areControlsDisabled = useRecoilValue(deleteCarButtonConfirmationDialogIsProcessing);

    const openDeleteCarButtonConfirmationDialog = () => setDeleteCarButtonConfirmationDialogId(id);
    const closeDeleteCarButtonConfirmationDialog = () => setDeleteCarButtonConfirmationDialogId(null)

    return {
        areControlsDisabled,
        isDeleteCarButtonConfirmationDialogOpen,
        openDeleteCarButtonConfirmationDialog,
        closeDeleteCarButtonConfirmationDialog,
    }
}
