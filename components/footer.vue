<template>
    <footer class="p-4 sm:p-6 dark:bg-slate-800">
        <div class="mx-auto max-w-screen-xl">
            <hr class="my-6 border-1 border-orange-300 sm:mx-auto pb-6 dark:border-gray-700 lg:my-8" />
            <div class="pl-2">
                <div class="mb-8 md:mb-0">
                    <NuxtLink href="/" class="flex items-center md:pb-7">
                        <nuxt-img format="webp" src="/logo.png" class="mr-3 h-8" alt="Our Logo" />
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BuildingBloCS</span>
                    </NuxtLink>
                </div>
                <ul class="flex flex-col sm:flex-wrap sm:flex-row text-lg text-gray-600 dark:text-slate-300 sm:space-x-4">
                    <li class="mb-6">
                        <NuxtLink href="/" aria-label="Home" class="hover:underline">Home</NuxtLink>
                    </li>
                    <li class="mb-6">
                        <NuxtLink href="/events" aria-label="Events" class="hover:underline">Events</NuxtLink>
                    </li>
                    <li class="mb-6">
                        <NuxtLink href="/team" aria-label="Our Team" class="hover:underline">Our Team</NuxtLink>
                    </li>
                    <li class="mb-6">
                        <NuxtLink href="/partners" aria-label="Our Partners" class="hover:underline">Our Partners</NuxtLink>
                    </li>
                    <li class="mb-6">
                        <NuxtLink href="/events/sept" aria-label="Sept Conference" class="hover:underline">Sept Conference</NuxtLink>
                    </li>
                    <li class="mb-6">
                        <NuxtLink href="/events/ctf" aria-label="BBCS x BlahajCTF" class="hover:underline">BBCS x BlahajCTF</NuxtLink>
                    </li>
                    <!-- <li class="mb-6">
                        <NuxtLink href="/events/sept"
                            class="hover:underline rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                            Register <span aria-hidden="true">&rarr;</span></NuxtLink>
                    </li> -->
                </ul>
            </div>
            <div class="sm:flex sm:items-center sm:justify-between pt-3 pb-10 pl-4">
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <NuxtLink href="https://instagram.com/buildingblocs23"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Follow our Instagram Page">
                        <IconsInstagram />
                    </NuxtLink>
                    <NuxtLink href="https://github.com/buildingblocs"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Take a look at our GitHub page">
                        <IconsGithub />
                    </NuxtLink>
                    <NuxtLink href="https://discord.gg/VSHyrbsJFs"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Join our Discord">
                        <IconsDiscord />
                    </NuxtLink>
                    <NuxtLink href="https://youtube.com/buildingblocssg"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Watch our YouTube videos">
                        <IconsYoutube />
                </NuxtLink>
            </div>
        </div>
    </div>
</footer></template>