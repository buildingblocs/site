<template>
  <div class="w-full max-w-md h-[39.5rem] mb-20 mx-auto">
    <p class="not-prose">Official Poster</p>
    <swiper-container :pagination="{clickable: true}" :navigation=true :autoplay="{ delay: 3000, disableOnInteraction: false }"
                      class="overflow-hidden rounded-xl h-[39.5rem] shadow-md">
      <swiper-slide v-for="poster in images" :key="poster">
        <nuxt-img format="webp" :src="poster" alt="poster" class="object-cover absolute top-0 h-[39.5rem]" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();

defineProps({
  images: {
    data: Array
  },
});
</script>

<style scoped>
img {
  margin: 0;
}

.round {
  border-radius: 1rem;
}
</style>