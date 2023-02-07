<template>
  <div class="card w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Car details</h2>
      <table class="table w-full">
        <tbody>
          <tr>
            <td><b>Brand</b></td>
            <td>{{ carDetails.brand }}</td>
          </tr>
          <tr>
            <td><b>Model</b></td>
            <td>{{ carDetails.model }}</td>
          </tr>
          <tr>
            <td><b>Year</b></td>
            <td>{{ carDetails.year }}</td>
          </tr>
        </tbody>
      </table>
      <div class="card-actions justify-end">
        <NuxtLink class="btn mr-2" to="/">Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type CarDetails = {
  id: number;
  model: string;
  brand: string;
  year: number;
};
const props = defineProps<{ id: string | number }>();
const carDetails = await $fetch<CarDetails>(
  `http://localhost:3001/cars/${props.id}`
);
</script>

<style scoped></style>
