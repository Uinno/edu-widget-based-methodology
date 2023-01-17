<script setup lang="ts">
import { useCreateCarDialogContentUI } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogContentUI";
import { useCreateCarDialogMutation } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogMutation";
import { useCreateCarDialogForm } from "@/views/CarList/widgets/CreateCarDialog/store/useCreateCarDialogForm";

const createCarDialogContentUI = useCreateCarDialogContentUI();
const createCarDialogMutation = useCreateCarDialogMutation();
const createCarDialogForm = useCreateCarDialogForm();
</script>

<template>
  <form class="flex flex-col gap-y-5">
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Brand</span>
      </label>
      <input
        type="text"
        class="input input-bordered"
        v-model="createCarDialogForm.v$.brand.$model"
      />
      <template
        v-for="error of createCarDialogForm.v$.brand.$errors"
        :key="error.$uid"
      >
        <label class="label-text text-error">{{ error.$message }}</label>
      </template>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Model</span>
      </label>
      <input
        type="text"
        class="input input-bordered"
        v-model="createCarDialogForm.v$.model.$model"
      />
      <template
        v-for="error of createCarDialogForm.v$.model.$errors"
        :key="error.$uid"
      >
        <label class="label-text text-error">{{ error.$message }}</label>
      </template>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Year</span>
      </label>
      <input
        type="text"
        class="input input-bordered"
        v-model="createCarDialogForm.v$.year.$model"
      />
      <template
        v-for="error of createCarDialogForm.v$.year.$errors"
        :key="error.$uid"
      >
        <label class="label-text text-error">{{ error.$message }}</label>
      </template>
    </div>
  </form>
  <div class="modal-action">
    <button
      :class="[
        { 'btn-disabled': createCarDialogContentUI.areControlsDisabled },
        'btn',
      ]"
      @click="createCarDialogMutation.createCar"
    >
      Create
    </button>
  </div>
</template>
