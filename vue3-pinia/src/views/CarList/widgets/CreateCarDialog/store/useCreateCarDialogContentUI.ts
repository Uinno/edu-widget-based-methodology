import { defineStore } from "pinia";
import { ref } from "vue";

export const useCreateCarDialogContentUI = defineStore(
  "createCarDialog/content/UI",
  () => {
    const areControlsDisabled = ref(false);
    const setControlsDisabled = () => {
      areControlsDisabled.value = true;
    };
    const setControlsEnabled = () => {
      areControlsDisabled.value = false;
    };

    return {
      areControlsDisabled,
      setControlsDisabled,
      setControlsEnabled,
    };
  }
);
