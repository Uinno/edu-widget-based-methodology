import { defineStore } from "pinia";
import { ref } from "vue";
import { useEditCarDialogForm } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogForm";
import { useEditCarDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogUI";

export const useEditCarConfirmationDialogUI = defineStore(
  "editCarConfirmationDialog/UI",
  () => {
    const isOpen = ref(false);
    const editCarDialogForm = useEditCarDialogForm();
    const editCarDialogUI = useEditCarDialogUI();
    const setIsOpen = () => (isOpen.value = true);

    const confirmClose = () => {
      editCarDialogForm.resetInitialState();
      isOpen.value = false;
      editCarDialogUI.close();
    };

    const cancelClose = () => {
      isOpen.value = false;
    };

    async function test() {
      console.log(":TEST", test);
    }

    return {
      isOpen,
      cancelClose,
      confirmClose,
      setIsOpen,
      test,
    };
  }
);
