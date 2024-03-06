<template>
  <div class="overflow-hidden sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex items-center lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <div class="h-full flex flex-col justify-center">
              <h2 class="mt-2">{{ title }}</h2>
              <p class="mt-2 sm:mt-6 leading-8">{{ desc }}</p>
            </div>
          </div>
        </div>
        <nuxt-img format="webp" :src="img" :alt="alt" :width="width" :height="height" densities="x1 x2"
                  sizes="sm:635px md:720px lg:1285px"
          class="object-cover object-center w-full max-h-[25rem] lg:max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LtextRpic',
  props: ['title', 'desc', 'img', 'alt', 'width', 'height'],
})
</script>
