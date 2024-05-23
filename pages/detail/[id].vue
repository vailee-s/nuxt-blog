<template>
  <div class="p-5">
    <h1 class="text-2xl">{{ title }}</h1>
    <div v-html="contentHtml"></div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const { title, contentHtml } = await $fetch(`/api/detail/${router.params.id}`);
</script>
