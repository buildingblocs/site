<template>
    <div class="mx-auto max-w-4xl">
        <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-10 sm:pb-24">{{ text ?? "" }}</h1>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'text'
  ]
}
</script>