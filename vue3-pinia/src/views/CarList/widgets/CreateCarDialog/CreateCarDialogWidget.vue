<script lang="ts" setup>
import { useCreateCarDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogUI";
import CreateCarDialogContent from "@/views/CarList/widgets/CreateCarDialog/components/CreateCarDialogContent.vue";
import CreateCarConfirmationDialog from "@/views/CarList/widgets/CreateCarDialog/components/CreateCarConfirmationDialog.vue";

const createCarDialogUI = useCreateCarDialogUI();
</script>

<template>
  <div
    :class="[
      'modal',
      { 'modal-open': createCarDialogUI.isCreateCarDialogOpen },
    ]"
  >
    <div class="modal-box relative">
      <label
        class="btn btn-sm btn-circle absolute right-2 top-2"
        @click="createCarDialogUI.closeCreateCarDialog"
        >✕</label
      >
      <h3 class="font-bold text-lg mb-5">Create car</h3>
      <CreateCarDialogContent />
    </div>
  </div>
  <CreateCarConfirmationDialog />
</template>
