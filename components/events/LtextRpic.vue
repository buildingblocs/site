<template>
  <div class="overflow-hidden sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex items-center lg:pr-8">
          <div class="lg:max-w-lg">
            <div class="h-full flex flex-col justify-center">
              <p class="text-lg leading-8 text-gray-600 dark:text-slate-300 font-mono font-bold">{{ date }}</p>
              <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{{ title }}</p>
              <p class="mt-2 sm:mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{{ desc }}</p>
              <div class="flex">
                <NuxtLink v-for="link in links" :href="link.url"
                  class="hover:underline flex rounded-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 px-3 py-2 text-s 2xl:text-sm font-semibold text-gray-600 hover:bg-opacity-20 dark:text-slate-200 dark:hover:bg-opacity-50 shadow-sm dark:hover:bg-gray-900 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 mt-4 mr-2">
                  {{link.title}} <span aria-hidden="true" class="ml-1">&rarr;</span>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256" class="ml-2">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M84,11c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h22.80078l-46.40039,46.40039c-1.2,1.2 -1.2,3.09922 0,4.19922c0.6,0.6 1.39961,0.90039 2.09961,0.90039c0.7,0 1.49961,-0.30039 2.09961,-0.90039l46.40039,-46.40039v22.80078c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-30c0,-1.7 -1.3,-3 -3,-3zM24,31c-7.2,0 -13,5.8 -13,13v60c0,7.2 5.8,13 13,13h60c7.2,0 13,-5.8 13,-13v-45c0,-1.7 -1.3,-3 -3,-3c-1.7,0 -3,1.3 -3,3v45c0,3.9 -3.1,7 -7,7h-60c-3.9,0 -7,-3.1 -7,-7v-60c0,-3.9 3.1,-7 7,-7h45c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3z"></path></g></g>
                  </svg> -->
                </NuxtLink>
            </div>
            </div>
          </div>
        </div>
        <nuxt-img format="webp" :src="img" alt=""
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
  props: ['title', 'desc', 'img', 'date', 'links'],
})
</script>
