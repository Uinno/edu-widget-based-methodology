<script setup lang="ts">
import { useCreateCarConfirmationDialogUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarConfirmationDialogUI";

const createCarConfirmationDialogUI = useCreateCarConfirmationDialogUI();
</script>

<template>
  <div
    :class="['modal', { 'modal-open': createCarConfirmationDialogUI.isOpen }]"
  >
    <div class="modal-box relative">
      <h3 class="font-bold text-lg mb-5">Create car</h3>
      <p class="py-4">Form contains unsaved data. Please confirm action.</p>
      <div class="modal-action">
        <button
          class="btn btn-secondary"
          @click="createCarConfirmationDialogUI.cancelClose"
        >
          Cancel
        </button>
        <button class="btn" @click="createCarConfirmationDialogUI.confirmClose">
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
