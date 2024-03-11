<template>
  <NuxtLink :to=link class="not-prose relative">
  <div class="h-[30rem] w-full  mb-10 overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition">
      <img :src=image class="h-full w-full object-cover transition opacity-90 hover:opacity-100 hover:scale-105">
    <div class="absolute bottom-5 left-5">
      <h2>{{ year }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
  </NuxtLink>
</template>

<script setup>
const { props } = defineProps(["year", "desc", "link", "image"]);
</script>