<script lang="ts" setup>
import { useCreateCarDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogUI";
import CreateCarDialogWidget from "@/views/CarList/widgets/CreateCarDialog/CreateCarDialogWidget.vue";

const createCarDialogUI = useCreateCarDialogUI();
</script>

<template>
  <button class="btn" @click="createCarDialogUI.openCreateCarDialog">
    Create
  </button>
  <CreateCarDialogWidget />
</template>
