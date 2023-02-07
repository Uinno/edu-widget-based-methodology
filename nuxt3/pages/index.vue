<template>
  <div
    class="overflow-x-auto flex flex-col items-center gap-10 p-10 bg-base-100"
  >
    <CarListHeader />
    <Suspense>
      <template #fallback>...Loading</template>
      <CarListWidget />
    </Suspense>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
