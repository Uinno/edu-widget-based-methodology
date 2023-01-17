<script setup lang="ts">
import CreateCarButton from "../widgets/ShowCreateCarDialogButton/ShowCreateCarDialogButton.widget.vue";
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title flex justify-between">
        Car list
        <CreateCarButton />
      </h2>
    </div>
  </div>
</template>
