import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useEditCarDialogForm } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogForm";
import { useEditCarConfirmationDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarConfirmationDialogUI";

export const useEditCarDialogUI = defineStore("editCarDialog/UI", () => {
  const editCarId = ref<number | null>(null);
  const isOpen = computed(() => editCarId.value !== null);
  const editCarDialogForm = useEditCarDialogForm();
  const editCarConfirmationDialogUI = useEditCarConfirmationDialogUI();

  const open = (id: number) => {
    editCarId.value = id;
  };

  const close = () => {
    if (editCarDialogForm.isFormDirty) {
      return editCarConfirmationDialogUI.setIsOpen();
    }
    editCarId.value = null;
    editCarDialogForm.resetInitialState();
  };

  return {
    editCarId,
    isOpen,
    open,
    close,
  };
});
