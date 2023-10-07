<template>
  <div class="sticky top-0 z-10">
    <header class="absolute inset-x-0 top-0">
      <nav
        class="bg-white dark:bg-slate-800 backdrop-filter backdrop-blur-xl bg-opacity-50 dark:bg-opacity-50 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between py-4 px-6 xl:py-3 xl:px-8"
        aria-label="Global"
      >
        <div class="flex xl:flex-1">
          <NuxtLink class="pt-0" to="/">
            <span class="sr-only">BuildingBloCS</span>
            <nuxt-img format="webp" class="h-8 w-auto" src="/logo.png" alt="" />
          </NuxtLink>
        </div>
        <div>
          <div class="pb-2">
            <NuxtLink
              href="/events/sept"
              class="xl:hidden flex items-center hover:underline rounded-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 px-3 py-1 text-xs sm:text-sm font-semibold text-gray-600 hover:bg-opacity-20 dark:text-slate-200 dark:hover:bg-opacity-50 shadow-sm dark:hover:bg-gray-900 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Sept Conference
              <span aria-hidden="true" class="ml-1">&rarr;</span>
            </NuxtLink>
          </div>
          <NuxtLink
            href="/events/ctf"
            class="xl:hidden flex items-center hover:underline rounded-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 px-3 py-1 text-xs sm:text-sm font-semibold text-gray-600 hover:bg-opacity-20 dark:text-slate-200 dark:hover:bg-opacity-50 shadow-sm dark:hover:bg-gray-900 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            BBCS × BlahajCTF
            <span aria-hidden="true" class="ml-1">&rarr;</span>
          </NuxtLink>
        </div>
        <div class="flex xl:hidden">
          <Menu as="div" class="relative inline-block text-left mt-1">
            <div>
              <MenuButton
                aria-label="Menu"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              >
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                  >
                    <template v-slot="{ active }">
                      <NuxtLink
                        :class="[
                          active
                            ? 'bg-orange-500 text-white'
                            : 'text-gray-900 dark:text-gray-200',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
                        ]"
                      >
                        {{ item.name }}
                      </NuxtLink>
                    </template>
                  </MenuItem>
                </div>
                <!-- <MenuItem v-slot="{ active }">
                                <div class="px-1 py-1">
                                    <NuxtLink to="/events/sept" :class="[
                                        active ? 'bg-orange-500 text-white' : 'text-gray-900 dark:text-gray-200',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
                                    ]">
                                        Register &rarr;
                                    </NuxtLink>
                                </div>
                                </MenuItem> -->
                <div class="pl-1 py-1 flex">
                  <p
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200"
                  >
                    Theme:
                  </p>
                  <Mode />
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="hidden xl:flex xl:gap-x-12">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200"
            >{{ item.name }}</NuxtLink
          >
        </div>
        <div class="hidden xl:flex xl:flex-1 space-x-1 xl:justify-end">
          <NuxtLink
            href="/events/sept"
            class="flex items-center hover:underline rounded-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 px-3 py-1 text-xs 2xl:text-sm font-semibold text-gray-600 hover:bg-opacity-20 dark:text-slate-200 dark:hover:bg-opacity-50 shadow-sm dark:hover:bg-gray-900 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            Sept Conference
            <span aria-hidden="true" class="ml-1">&rarr;</span>
          </NuxtLink>

          <NuxtLink
            href="/events/ctf"
            class="flex items-center hover:underline rounded-full bg-gray-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 px-3 py-1 text-xs 2xl:text-sm font-semibold text-gray-600 hover:bg-opacity-20 dark:text-slate-200 dark:hover:bg-opacity-50 shadow-sm dark:hover:bg-gray-900 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            BBCS × BlahajCTF
            <span aria-hidden="true" class="ml-1">&rarr;</span>
          </NuxtLink>
          <Mode />
          <!-- <NuxtLink href="/events/sept"
                        class="hover:underline rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                        Register
                        <span aria-hidden="true">&rarr;</span>
                    </NuxtLink> -->
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Our Team", href: "/team" },
  { name: "Our Partners", href: "/partners/" },
];
</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-2 decoration-[#ea5a0c];
}
</style>
