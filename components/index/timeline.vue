<template>
  <div class="overflow-hidden bg-white dark:bg-slate-800 pt-10 md:pt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
        <div class="flex items-center justify-center"> <!-- Center the content horizontally -->
          <div class="lg:max-w-3xl"> <!-- Modify the class to control the width -->
            <h2 class="mb-10">Our History</h2>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4" v-for="event in events" :key="event.date">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300" v-html="event.date" />
                <h3 v-html="event.title" />
                <p v-html="event.about" />
                <NuxtLink v-if="event.link" :href="event.link" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></NuxtLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Timeline',
  props: [],
  data: () => ({
    events: [
      {
        date: '2017',
        title: 'Started as VIA@DHS',
        about: 'An initiative sparked by the Dunman High Infocomm Club and Mr Gi Soong Chee.'
      },
      {
        date: '2018 - 2023',
        title: 'Expansion into other Schools',
        about:
            'We expanded to take organisers from NUSH, TJC, SP and many more institutes around Singapore, hosting events yearly.'
      },
      {
        date: 'Coming Soon',
        title: 'Our March Conference',
        about: 'Our March Conference is in the works!',
      },
    ]
  })
})
</script>