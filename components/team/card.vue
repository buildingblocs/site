<template>
  <div
      class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
    <div class="px-4 pt-4 flex justify-between">
      <div class="text-left">
        <div class="space-x-2">
          <TeamBadgesDec v-if="teamMember?.dec" />
          <TeamBadgesFoss v-if="teamMember?.foss" />
          <TeamBadgesJune v-if="teamMember?.june" />
          <TeamBadgesLead v-if="teamMember?.lead" />
          <TeamBadgesMarch v-if="teamMember?.march" />
          <TeamBadgesSep v-if="teamMember?.sep" />
        </div>
      </div>
      <div class="text-right">
        <NuxtLink v-if="teamMember?.githubLink" :to="teamMember?.githubLink"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
          <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
          </svg>
        </NuxtLink>
        <NuxtLink v-if="teamMember?.inLink" :to="teamMember?.inLink"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
          <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
            <path d="M3 5.012H0V15h3V5.012Z"/>
          </svg>
        </NuxtLink>
        <NuxtLink v-if="teamMember?.webLink" :to="teamMember?.webLink"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
          <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 21 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <img
                class="w-32 h-32 mb-3 rounded-full shadow-lg"
                  :src="teamMember?.imageSrc ?? '/teams/ppl/blank.jpg'" :alt="teamMember?.name + ' image'" />
      <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember?.name }}</h5>
      <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember?.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'teamMember'
  ]
}
</script>