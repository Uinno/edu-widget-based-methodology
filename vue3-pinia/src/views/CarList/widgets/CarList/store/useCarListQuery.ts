import { defineStore } from "pinia";
import { ref } from "vue";

export type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
};

export const useCarListQuery = defineStore("carList/query", () => {
  const cars = ref<Car[]>([]);

  const loadCars = async (): Promise<void> => {
    const response = await fetch("http://localhost:3001/cars");
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }

    cars.value = (await response.json()) as Car[];
  };

  const refreshCars = loadCars;

  return {
    cars,
    loadCars,
    refreshCars,
  };
});
