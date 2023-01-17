import { defineStore } from "pinia";
import { useCarListQuery } from "@/views/CarList/widgets/CarList/store/useCarListQuery";
import { useEditCarDialogForm } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogForm";
import { useEditCarDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogUI";
import { useEditCarDialogContentUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogContentUI";

export const useEditCarMutation = defineStore("editCar/mutation", () => {
  const carListQuery = useCarListQuery();
  const editCarDialogForm = useEditCarDialogForm();
  const editCarDialogUI = useEditCarDialogUI();
  const editCarDialogContentUI = useEditCarDialogContentUI();

  const editCar = async () => {
    const isValid = await editCarDialogForm.validate();
    if (!isValid) return;

    try {
      editCarDialogContentUI.setControlsDisabled();
      const response = await fetch(
        `http://localhost:3001/cars/${editCarDialogForm.initialState.id}`,
        {
          method: "PUT",
          body: JSON.stringify(editCarDialogForm.initialState),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) return;
      carListQuery.refreshCars();
      editCarDialogForm.resetInitialState();
      editCarDialogUI.close();
    } catch (e) {
      console.error(e);
    } finally {
      editCarDialogContentUI.setControlsEnabled();
    }
  };

  return { editCar };
});
