<template>
  <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
    <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">{{ title }}</h2>
    <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left"><slot></slot></p>
  </div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>