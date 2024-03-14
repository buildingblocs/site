<template>
  <NuxtLink :to=link class="not-prose relative group">
    <div class="h-[30rem] w-full  mb-10 overflow-hidden rounded-xl shadow-sm transition relative">
      <img :src=image class="h-full w-full object-cover transition opacity-90 group-hover:opacity-100 group-hover:scale-105">
      <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-transparent dark:to-black to-white opacity-50" />
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