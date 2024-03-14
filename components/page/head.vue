<template>
  <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
    <h2 class="text-left">{{ title }}</h2>
    <p class="mt-6 text-left"><slot></slot></p>
  </div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>