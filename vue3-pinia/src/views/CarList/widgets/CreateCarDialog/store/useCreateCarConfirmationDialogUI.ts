import { defineStore } from "pinia";
import { ref } from "vue";
import { useCreateCarDialogForm } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogForm";
import { useCreateCarDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogUI";

export const useCreateCarConfirmationDialogUI = defineStore(
  "createCarConfirmationDialog/UI",
  () => {
    const isOpen = ref(false);
    const createCarDialogForm = useCreateCarDialogForm();
    const createCarDialogUI = useCreateCarDialogUI();
    const setIsOpen = () => (isOpen.value = true);

    const confirmClose = () => {
      createCarDialogForm.resetInitialState();
      isOpen.value = false;
      createCarDialogUI.closeCreateCarDialog();
    };

    const cancelClose = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      cancelClose,
      confirmClose,
      setIsOpen,
    };
  }
);
