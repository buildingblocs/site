<template>
  <div class="overflow-hidden bg-white dark:bg-slate-800 pt-10 md:pt-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
        <div class="flex items-center justify-center"> <!-- Center the content horizontally -->
          <div class="lg:max-w-3xl"> <!-- Modify the class to control the width -->
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-200 pb-10 sm:text-4xl">Our History</p>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">2017</time>
                  <h3 class="text-lg font-semibold text-gray-500 dark:text-white">Started as VIA@DHS</h3>
                  <p class="mb-4 text-base font-normal text-gray-400 dark:text-gray-400">An initiative sparked by the Dunman High Infocomm Club and Mr Gi Soong Chee.</p>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">2018 - 2023</time>
                  <h3 class="text-lg font-semibold text-gray-500 dark:text-white">Expansion into other Schools</h3>
                  <p class="text-base font-normal text-gray-400 dark:text-gray-400">We expanded to take organisers from NUSH, TJC, SP and many more institutes around Singapore.</p>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">March 2023</time>
                  <h3 class="text-lg font-semibold text-gray-500 dark:text-white">Our March Conference</h3>
                  <p class="text-base font-normal text-gray-400 dark:text-gray-400">Our March Conference on Computational Thinking, ending with the completely organiser-created game Starvation.</p>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">29th May - 5th June 2023</time>
                  <h3 class="text-lg font-semibold text-gray-500 dark:text-white">Our June Conference</h3>
                  <p class="text-base font-normal text-gray-400 dark:text-gray-400 mb-4">The most important event of this year</p>
                  <NuxtLink href="/events" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-500">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></NuxtLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  