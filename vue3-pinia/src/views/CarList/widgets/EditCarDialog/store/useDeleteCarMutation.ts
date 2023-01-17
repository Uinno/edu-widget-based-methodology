import { defineStore } from "pinia";
import { useCarListQuery } from "@/views/CarList/widgets/CarList/store/useCarListQuery";
import { useEditCarDialogForm } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogForm";
import { useEditCarDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogUI";
import { useEditCarDialogContentUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogContentUI";

export const useDeleteCarMutation = defineStore("deleteCar/mutation", () => {
  const carListQuery = useCarListQuery();
  const editCarDialogForm = useEditCarDialogForm();
  const editCarDialogUI = useEditCarDialogUI();
  const editCarDialogContentUI = useEditCarDialogContentUI();

  const deleteCar = async () => {
    try {
      editCarDialogContentUI.setControlsDisabled();
      const response = await fetch(
        `http://localhost:3001/cars/${editCarDialogForm.initialState.id}`,
        {
          method: "DELETE",
          body: JSON.stringify(editCarDialogForm.initialState),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) return;
      carListQuery.refreshCars();
      editCarDialogUI.close();
      editCarDialogForm.resetInitialState();
    } catch (e) {
      console.error(e);
    } finally {
      editCarDialogContentUI.setControlsEnabled();
    }
  };

  return { deleteCar };
});
