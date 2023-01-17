import { defineStore } from "pinia";
import { ref } from "vue";
import { useCreateCarDialogForm } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogForm";
import { useCreateCarConfirmationDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarConfirmationDialogUI";

export const useCreateCarDialogUI = defineStore("createCarDialog", () => {
  const createCarDialogFrom = useCreateCarDialogForm();
  const createCarConfirmationDialogUI = useCreateCarConfirmationDialogUI();

  const isCreateCarDialogOpen = ref(false);

  const closeCreateCarDialog = () => {
    if (createCarDialogFrom.v$.$anyDirty) {
      return createCarConfirmationDialogUI.setIsOpen();
    }
    isCreateCarDialogOpen.value = false;
    createCarDialogFrom.resetInitialState();
  };

  const openCreateCarDialog = () => {
    isCreateCarDialogOpen.value = true;
  };

  return {
    isCreateCarDialogOpen,
    closeCreateCarDialog,
    openCreateCarDialog,
  };
});
