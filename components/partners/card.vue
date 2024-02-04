<script setup>
defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/128'
  },
  title: {
    type: String,
    default: 'Default title'
  },
  description: {
    type: String,
    default: 'Default description'
  }
})
</script>

<template>
  <main class="m-2">
    <div class="max-w-xs border rounded-lg shadow bg-gray-600 border-gray-500" ref="card">
      <div class="m-2 rounded-t-lg pt-2 flex justify-center">
        <img :src="image" class="h-20 object-contain"  alt="hi"/>
      </div>
      <div class="p-5">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 line-clamp-1">
            {{ title }}
        </h2>
        <p class="mb-3 font-normal text-gray-200">
          {{ description }}
        </p>
      </div>
    </div>
  </main>
</template>