<template>
  <main>
    <div
      class="overflow-x-auto flex flex-col items-center gap-10 p-10 bg-base-100"
    >
      <CarDetailsHeader />
      <Suspense>
        <CarDetailsWidget :id="route.params.id" />
        <template #fallback> ...Loading</template>
      </Suspense>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
