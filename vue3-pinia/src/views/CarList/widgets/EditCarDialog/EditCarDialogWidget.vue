<script setup lang="ts">
import { useEditCarDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogUI";
import EditCarDialogContent from "@/views/CarList/widgets/EditCarDialog/componenets/EditCarDialogContent.vue";
import EditCarConfirmationDialog from "@/views/CarList/widgets/EditCarDialog/componenets/EditCarConfirmationDialog.vue";

const editCarDialogUI = useEditCarDialogUI();
</script>
<template>
  <div :class="['modal', { 'modal-open': editCarDialogUI.isOpen }]">
    <div class="modal-box relative">
      <label
        class="btn btn-sm btn-circle absolute right-2 top-2"
        @click="editCarDialogUI.close"
        >✕</label
      >
      <h3 class="font-bold text-lg mb-5">Edit car</h3>
      <Suspense
        v-if="editCarDialogUI.editCarId"
        :key="editCarDialogUI.editCarId"
      >
        <EditCarDialogContent :id="editCarDialogUI.editCarId" />
        <template #fallback> ...loading </template>
      </Suspense>
    </div>
  </div>
  <EditCarConfirmationDialog />
</template>
