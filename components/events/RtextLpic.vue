<template>
  <div class="overflow-hidden py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex items-center lg:pr-8 lg:pt-4">
          <nuxt-img format="webp" :src="img" alt=""
            class="object-cover object-center w-full max-h-[25rem] lg:max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
        <div class="flex items-center lg:pl-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <div class="h-full flex flex-col justify-center">
              <p class="text-lg leading-8 text-gray-600 dark:text-slate-300 font-mono font-bold">{{ date }}</p>
              <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{{ title }}</p>
              <p class="mt-2 sm:mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RtextLpic',
  props: ['title', 'desc', 'img', 'date'],
})
</script>
