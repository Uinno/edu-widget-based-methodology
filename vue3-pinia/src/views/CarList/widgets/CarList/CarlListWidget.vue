<script lang="ts" setup>
import CarListRow from "@/views/CarList/widgets/CarList/components/CarListRow.vue";
import { useCarListQuery } from "@/views/CarList/widgets/CarList/store/useCarListQuery";

const carListQuery = useCarListQuery();
await carListQuery.loadCars();
</script>

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
        <CarListRow v-for="car in carListQuery.cars" :key="car.id" :car="car" />
      </tbody>
    </table>
  </div>
</template>
