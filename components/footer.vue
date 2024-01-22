<template>
  <footer class="p-4 sm:p-6 dark:bg-slate-800">
    <div class="mx-auto max-w-screen-xl">
      <hr
        class="my-6 border-1 border-orange-300 sm:mx-auto pb-2 dark:border-gray-700 lg:my-8" />
      <div class="sm:flex">
        <div class="pl-2">
          <div class="mb-8 md:mb-0">
            <NuxtLink href="/" class="flex items-center md:pb-7">
                <span class="sr-only">BuildingBloCS</span>
                <nuxt-img format="webp" class="h-8 w-auto mr-3" src="/logo.png" width="100" height="100"
                          alt="BuildingBloCS Logo" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BuildingBloCS
              </span>
            </NuxtLink>
          </div>
          <ul class="flex flex-col sm:flex-wrap sm:flex-row text-lg text-gray-600 dark:text-slate-300 sm:space-x-4">
            <li class="mb-6" v-for="link in links" :key="link.link">
              <NuxtLink 
                :href="link.link" 
                :aria-label="link.title ?? ''"
                :class="link.class">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- div class="ml-auto">
          <div class="ml-2">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Events
            </h2>
            <ul class="text-lg text-gray-600 dark:text-slate-300 md:columns-2">
              <li class="mb-4" v-for="event in events" :key="event.link">
                <NuxtLink :href="event.link" :aria-label="event.title" class="hover:underline">
                  {{ event.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div -->
      </div>
      <div class="sm:flex sm:items-center sm:justify-between pt-3 pb-10 pl-4">
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <NuxtLink
            href="https://instagram.com/buildingblocs23"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Follow our Instagram Page"
          >
            <IconsInstagram />
          </NuxtLink>
          <NuxtLink
            href="https://github.com/buildingblocs"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Take a look at our GitHub page"
          >
            <IconsGithub />
          </NuxtLink>
          <NuxtLink
            href="https://discord.gg/VSHyrbsJFs"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Join our Discord"
          >
            <IconsDiscord />
          </NuxtLink>
          <NuxtLink
            href="https://youtube.com/buildingblocssg"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            aria-label="Watch our YouTube videos"
          >
            <IconsYoutube />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const linkStyle = "hover:underline";
const buttonStyle = "rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

const links = [
  {
    title: 'Home',
    link: '/',
    class: linkStyle
  },
  {
    title: 'Our Team',
    link: '/team',
    class: linkStyle
  },
  {
    title: 'Our Partners',
    link: '/partners',
    class: linkStyle
  },
  // {
  //   title: 'Register <span aria-hidden="true">&rarr;</span>',
  //   link: '/events/ctf',
  //   class: buttonStyle
  // }
]


const events = [
  {
    title: 'March Conference',
    link: '/events/march'
  },
  {
    title: 'BBCS × FOSSASIA Summit',
    link: '/events/foss'
  },
  {
    title: 'June Conference',
    link: '/events/june'
  },
  {
    title: 'September Conference',
    link: '/events/sept'
  },
  {
    title: 'BBCS × BlahajCTF',
    link: '/events/ctf'
  },
]

</script>