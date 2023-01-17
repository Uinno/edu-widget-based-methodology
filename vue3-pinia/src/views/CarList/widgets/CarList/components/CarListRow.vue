<script lang="ts" setup>
import ShowEditCarDialogButtonWidget from "@/views/CarList/widgets/ShowEditCarDialogButton/ShowEditCarDialogButtonWidget.vue";

type CarListItem = {
  id: number;
  model: string;
  brand: string;
  year: number;
};

defineProps<{ car: CarListItem }>();
</script>

<template>
  <tr>
    <th>{{ car.id }}</th>
    <td>{{ car.brand }}</td>
    <td>{{ car.model }}</td>
    <td>{{ car.year }}</td>
    <td>
      <ShowEditCarDialogButtonWidget :id="car.id" class="mr-3" />
      <RouterLink :to="{ name: 'CarDetails', params: { id: car.id } }"
        >View
      </RouterLink>
    </td>
  </tr>
</template>
