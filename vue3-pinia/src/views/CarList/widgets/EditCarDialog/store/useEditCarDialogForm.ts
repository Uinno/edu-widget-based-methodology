import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { alphaNum, between, numeric, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const getInitialState = () => ({
  id: NaN,
  brand: "",
  model: "",
  year: "",
});

type EditCar = {
  id: number;
  brand: string;
  model: string;
  year: number;
};

export const useEditCarDialogForm = defineStore("editCarDialog/form", () => {
  const initialState = reactive(getInitialState());

  const load = async (id: number) => {
    const response = await fetch(`http://localhost:3001/cars/${id}`);
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    const editCar = (await response.json()) as EditCar;

    initialState.model = editCar.model;
    initialState.brand = editCar.brand;
    initialState.year = editCar.year.toString();
    initialState.id = editCar.id;
  };

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

  const isFormDirty = computed(() => v$.value.$anyDirty);

  const validate = v$.value.$validate;

  return {
    initialState,
    resetInitialState,
    isFormDirty,
    v$,
    load,
    validate,
  };
});
