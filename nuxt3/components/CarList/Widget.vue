<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <CarListRow v-for="car in cars" :key="car.id" :car="car" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type Car = {
  id: number;
  model: string;
  brand: string;
  year: number;
};
const cars = await $fetch<Car[]>("http://localhost:3001/cars");
</script>

<style scoped></style>
