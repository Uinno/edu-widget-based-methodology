<script setup lang="ts">
import { useEditCarConfirmationDialogUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarConfirmationDialogUI";

const editCarConfirmationDialogUI = useEditCarConfirmationDialogUI();
</script>

<template>
  <div :class="['modal', { 'modal-open': editCarConfirmationDialogUI.isOpen }]">
    <div class="modal-box relative">
      <h3 class="font-bold text-lg mb-5">Edit car</h3>
      <p class="py-4">Form contains unsaved data. Please confirm action.</p>
      <div class="modal-action">
        <button
          class="btn btn-secondary"
          @click="editCarConfirmationDialogUI.cancelClose"
        >
          Cancel
        </button>
        <button class="btn" @click="editCarConfirmationDialogUI.confirmClose">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
