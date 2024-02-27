<template>
  <NuxtLink :to=link class="not-prose relative">
    <img :src=image class="h-[30rem] w-full object-cover rounded-xl shadow-sm hover:shadow-xl transition opacity-90 hover:opacity-100">
    <div class="absolute bottom-5 left-5">
      <h2>{{ year }}</h2>
      <p>{{ desc }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const { props } = defineProps(["year", "desc", "link", "image"]);
</script>