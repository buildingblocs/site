<template>
    <div class="sticky top-0 z-10">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="bg-white dark:bg-slate-800 backdrop-filter backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between p-6 lg:px-8"
                aria-label="Global">
                <div class="flex lg:flex-1">
                    <NuxtLink class="-m-1.5 p-1.5" to="/">
                        <span class="sr-only">BuildingBloCS</span>
                        <nuxt-img format="webp" class="h-8 w-auto" src="/logo.png" alt="" />
                    </NuxtLink>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200">{{ item.name }}</NuxtLink>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Mode />
                    <NuxtLink href="https://go.buildingblocs.sg/june"
                        class="hover:underline rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                        Register
                        <span aria-hidden="true">&rarr;</span>
                    </NuxtLink>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <NuxtLink class="-m-1.5 p-1.5" to="/">
                            <span class="sr-only">BuildingBloCS</span>
                            <nuxt-img format="webp" class="h-8 w-auto" src="/logo.png" alt="" />
                        </NuxtLink>
                        <Mode />
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-200" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50">
                                    {{
                                        item.name }}</NuxtLink>
                            </div>
                            <div class="py-6">
                                <NuxtLink href="https://go.buildingblocs.sg/june"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50">
                                    Register
                                    <span aria-hidden="true">&rarr;</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Partners', href: '/partners' },
]

const mobileMenuOpen = ref(false)
</script>