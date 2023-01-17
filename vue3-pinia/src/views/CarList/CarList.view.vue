<script lang="ts" setup>
import CarlListWidget from "@/views/CarList/widgets/CarList/CarlListWidget.vue";
import CarListHeader from "@/views/CarList/componenents/CarListHeader.vue";
import EditCarDialogWidget from "@/views/CarList/widgets/EditCarDialog/EditCarDialogWidget.vue";
</script>

<template>
  <main>
    <div
      class="overflow-x-auto flex flex-col items-center gap-10 p-10 bg-base-100"
    >
      <CarListHeader />
      <Suspense>
        <CarlListWidget />
        <template #fallback> ...Loading </template>
      </Suspense>
    </div>
    <EditCarDialogWidget />
  </main>
</template>
