<script lang="ts" setup>
import CarDetailsHeader from "@/views/CarDetails/components/CarDetailsHeader.vue";
import CarDetailsWidget from "@/views/CarDetails/widgets/CarDetails/CarDetailsWidget.vue";

defineProps<{ id: string }>();
</script>

<template>
  <main>
    <div
      class="overflow-x-auto flex flex-col items-center gap-10 p-10 bg-base-100"
    >
      <CarDetailsHeader />
      <Suspense>
        <CarDetailsWidget :id="id" />
        <template #fallback> ...Loading</template>
      </Suspense>
    </div>
  </main>
</template>
