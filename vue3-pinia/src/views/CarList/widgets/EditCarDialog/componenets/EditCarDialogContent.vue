<script setup lang="ts">
import { useEditCarDialogForm } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogForm";
import { useEditCarDialogContentUI } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarDialogContentUI";
import { useDeleteCarMutation } from "@/views/CarList/widgets/EditCarDialog/store/useDeleteCarMutation";
import { useEditCarMutation } from "@/views/CarList/widgets/EditCarDialog/store/useEditCarMutation";

const props = defineProps<{ id: number }>();
const editCarDialogForm = useEditCarDialogForm();
const editCarDialogContentUI = useEditCarDialogContentUI();
const deleteCarMutation = useDeleteCarMutation();
const editCarMutation = useEditCarMutation();
await editCarDialogForm.load(props.id);
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
        v-model="editCarDialogForm.v$.brand.$model"
      />
      <template
        v-for="error of editCarDialogForm.v$.brand.$errors"
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
        v-model="editCarDialogForm.v$.model.$model"
      />
      <template
        v-for="error of editCarDialogForm.v$.model.$errors"
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
        v-model="editCarDialogForm.v$.year.$model"
      />
      <template
        v-for="error of editCarDialogForm.v$.year.$errors"
        :key="error.$uid"
      >
        <label class="label-text text-error">{{ error.$message }}</label>
      </template>
    </div>
  </form>
  <div class="modal-action">
    <button
      :class="[
        { 'btn-disabled': editCarDialogContentUI.areControlsDisabled },
        'btn btn-error',
      ]"
      @click="deleteCarMutation.deleteCar"
    >
      Delete
    </button>
    <button
      :class="[
        { 'btn-disabled': editCarDialogContentUI.areControlsDisabled },
        'btn',
      ]"
      @click="editCarMutation.editCar"
    >
      Edit
    </button>
  </div>
</template>
