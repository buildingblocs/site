<template>
  <div class="pb-10 sm:pb-12 my-6">
    <Disclosure v-for="(faq, index) in faqs.faqs" :key="index" v-slot="{ open }">
      <DisclosureButton class="mt-2 flex items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left sm:text-xl text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 text-md font-semibold tracking-tight w-full">
        <span>{{ faq.question }}</span>
        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-orange-500"/>
      </DisclosureButton>
      <DisclosurePanel class="px-4 py-4 pb-2 text-lg text-gray-600 dark:text-slate-300">
        <span v-html="faq.answer"></span>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const faqs = defineProps(['faqs'])
</script>