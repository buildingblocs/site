<template>
    <div id="accordion-flush" data-accordion="collapse" class="mt-4" data-active-classes=""
        data-inactive-classes="text-gray-500 dark:text-gray-400">
        <h2 id="accordion-flush-heading-1">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-1" aria-expanded="false"
                aria-controls="accordion-flush-body-1">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">Must I go for
                    all workshops?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">Not at all! You can choose which workshops you
                    would like to attend.</p>
            </div>
        </div>
        <h2 id="accordion-flush-heading-2">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                aria-controls="accordion-flush-body-2">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">Why should I
                    sign up?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">You can learn a whole lot of new skills and it’ll
                    be really fun!</p>
            </div>
        </div>
        <h2 id="accordion-flush-heading-3">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                aria-controls="accordion-flush-body-3">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">What if
                    something pops up and I can't make it?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">Email us at 
                    <NuxtLink
                        to="mailto:hello@buildingblocs.sg" class="text-orange-300 hover:underline">
                        hello@buildingblocs.sg
                    </NuxtLink> 
                    or approach us on Discord in any appropriate channels and we will update your signup status
                    accordingly.</p>
            </div>
        </div>
        <h2 id="accordion-flush-heading-4">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
                aria-controls="accordion-flush-body-4">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">Is the event
                    free?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">Yep, thanks to our generous sponsors, it’s
                    completely free!</p>
            </div>
        </div>
        <h2 id="accordion-flush-heading-5">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-5" aria-expanded="false"
                aria-controls="accordion-flush-body-5">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">Are there prizes?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">There are prizes including Sony Headphones and Amazon gift cards for every member of the winning group!</p>
            </div>
        </div>
        <h2 id="accordion-flush-heading-6">
            <button type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-6" aria-expanded="false"
                aria-controls="accordion-flush-body-6">
                <span class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">How will the hackathon groups be allocated?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-flush-body-6" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-lg text-gray-600 dark:text-slate-300">The hackathon will be carried out in groups of three. You may indicate who you would like to be grouped with (make sure it's mutual) and we'll take that into consideration. We'll fill any empty slots randomly, taking into consideration your school and age to ensure a pleasant collaboration experience!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initAccordions } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
})
</script>
