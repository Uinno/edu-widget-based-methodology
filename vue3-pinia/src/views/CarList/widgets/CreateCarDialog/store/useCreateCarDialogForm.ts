import { defineStore } from "pinia";
import { reactive } from "vue";
import { alphaNum, between, numeric, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const getInitialState = () => ({
  brand: "",
  model: "",
  year: "",
});

export const useCreateCarDialogForm = defineStore(
  "createCarDialog/form",
  () => {
    const initialState = reactive(getInitialState());

    const rules = {
      brand: { required, alphaNum },
      model: { required, alphaNum },
      year: { required, numeric, between: between(1970, 2022) },
    };

    const v$ = useVuelidate(rules, initialState);

    const resetInitialState = () => {
      initialState.brand = "";
      initialState.model = "";
      initialState.year = "";
      v$.value.$reset();
    };

    const isFormDirty = () => v$.value.$anyDirty;

    return {
      initialState,
      resetInitialState,
      isFormDirty,
      v$,
    };
  }
);
