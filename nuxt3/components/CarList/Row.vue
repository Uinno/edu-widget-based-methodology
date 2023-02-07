<template>
  <tr>
    <th>{{ car.id }}</th>
    <td>{{ car.brand }}</td>
    <td>{{ car.model }}</td>
    <td>{{ car.year }}</td>
    <td>
      <EditCarDialogButton :id="car.id" class="mr-3">Edit</EditCarDialogButton>
      <NuxtLink :to="`/cars/${car.id}`">View </NuxtLink>
    </td>
  </tr>
</template>

<script setup lang="ts">
type CarListItem = {
  id: number;
  model: string;
  brand: string;
  year: number;
};

defineProps<{ car: CarListItem }>();
</script>

<style scoped></style>
