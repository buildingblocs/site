<template>
  <div v-for="day in timeline" :key="day.date" class="not-prose">
    <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">{{ day.date }}</h2>
    <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-3">
      <li v-for="event in day.events" :key="event.time" class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-600" />
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{{event.time }}</time>
        <h3 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ event.title }}</h3>
        <!-- <p class="sm:text-lg text-md text-gray-600 dark:text-slate-300">
            {{ event.desc }}
        </p> -->

        <div class="flex items-center">
          <p class="sm:text-lg text-md grow text-gray-600 dark:text-slate-300">{{ event.desc }}</p>
          <NuxtLink v-if="event.youtube"
                    :href="event.youtube"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-4"
          >
            <IconsYoutube />
          </NuxtLink>
        </div>
        <p class="text-md text-gray-500 dark:text-slate-400">{{ event.author }}</p>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps(['timeline'])
</script>