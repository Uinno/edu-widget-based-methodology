<script lang="ts" setup>
import { useEditCarDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogUI";

const props = defineProps<{ id: number }>();

const editCarDialogUI = useEditCarDialogUI();
</script>

<template>
  <button class="btn" @click="editCarDialogUI.open(props.id)">Edit</button>
</template>
