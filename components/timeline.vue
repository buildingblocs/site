<template>
    <div>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mt-2 mb-10">
            {{ title }}
        </h1>
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white mb-4">
            {{ date }}
        </h2>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-10">
            <li v-for="item in events" :key="item.date" class="mb-10 ml-4">
                <div
                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-600">
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{{ item.date }}</time>
                <h3 class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                    {{ item.title }}
                </h3>
                <p class="mb-4 text-lg leading-8 text-gray-600 dark:text-slate-300">
                    {{ item.desc }}
                </p>
            </li>
        </ol>
    </div>
</template>
  
<script setup>
const { props } = defineProps(["date", "title", "events"]);
</script>
  