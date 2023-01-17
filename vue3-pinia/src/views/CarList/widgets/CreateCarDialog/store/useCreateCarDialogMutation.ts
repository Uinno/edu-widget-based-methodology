import { defineStore } from "pinia";
import { useCarListQuery } from "@/views/CarList/widgets/CarList/store/useCarListQuery";
import { useCreateCarDialogForm } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogForm";
import { useCreateCarDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogUI";
import { useCreateCarDialogContentUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogContentUI";

export const useCreateCarDialogMutation = defineStore(
  "createCarDialog/mutation",
  () => {
    const carListQuery = useCarListQuery();
    const createCarDialogForm = useCreateCarDialogForm();
    const createCarDialogUI = useCreateCarDialogUI();
    const createCarDialogContentUI = useCreateCarDialogContentUI();
    const createCar = async () => {
      const isValid = await createCarDialogForm.v$.$validate();
      if (!isValid) return;
      try {
        createCarDialogContentUI.setControlsDisabled();
        const response = await fetch("http://localhost:3001/cars", {
          method: "POST",
          body: JSON.stringify(createCarDialogForm.initialState),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) return;
        carListQuery.refreshCars();
        createCarDialogForm.resetInitialState();
        createCarDialogUI.closeCreateCarDialog();

        return true;
      } catch (e) {
        console.error("ERROR: ", e);
        return false;
      } finally {
        createCarDialogContentUI.setControlsEnabled();
      }
    };

    return { createCar };
  }
);
