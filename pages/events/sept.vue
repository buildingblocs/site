<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#9fa39c] to-[#ffc8c8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto lg:max-w-7xl lg:flex justify-center max-w-lg px-10 sm:px-0">
                        <div class="text-left pb-10 sm:pb-24 max-w-xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                September Conference</h1>
                            <h2 class="text-3xl mt-6 font-semibold tracking-tight text-gray-900 dark:text-white">
                                Key Details</h2>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                Dates: 3, 4 and 5 Sept <br>
                                Venue: Online <br>
                                Email contact for queries:
                                <NuxtLink to="mailto:hello@buildingblocs.sg" class="text-orange-300 hover:underline">
                                    hello@buildingblocs.sg
                                </NuxtLink>
                            </p>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">BuildingBloCS’s
                                annual September conference will be happening on <b>3rd, 4th and 5th Sept</b> virtually.
                                This year’s conference will be on <b>Web Development.</b></p>
                            <EventsSeptFaq />
                        </div>
                        <div class="mx-1 md:mx-7">
                            <div class="mx-1 md:mx-7 max-w-lg">
                                <div class="mx-1 md:mx-7 max-w-lg">
                                    <div v-for="timeline in timelines" :key="timeline.date">
                                        <h1
                                            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                            {{ timeline.title }}
                                        </h1>
                                        <h2
                                            class="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white mb-4">
                                            {{ timeline.date }}
                                        </h2>
                                        <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-10">
                                            <li v-for="event in timeline.events" :key="event.title" class="mb-10 ml-4">
                                                <div
                                                    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-600">
                                                </div>
                                                <time
                                                    class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{{
                                                        event.date }}</time>
                                                <h3
                                                    class="text-md font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                                                    {{ event.title }}
                                                </h3>
                                                <p class="mb-4 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                                    {{ event.desc }}
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EventsCta />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const timelines = [
    {
        date: "3rd Sept",
        events: [
            {
                date: "10am - 11.30am",
                title: "Intro to Design Thinking and Figma",
                desc: "by Du Yuhan and Cervon Wong",
            },
            {
                date: "3pm - 5pm",
                title: "Intro to HTML/CSS/JS",
                desc: "by Justin Chee, Oon Zheng Kang, Saw Ze Dong and Harry Cheong",
            },
            {
                date: "7pm - 9pm",
                title: "Intro to Vue",
                desc: "by Mayukh Das and Lee I-Shiang",
            },
        ],
    },
    {
        date: "4th Sept",
        events: [
            {
                date: "10am - 12pm",
                title: "Intro to React",
                desc: "by Liu Wenkai and “Peter” Zeyu Yao",
            },
            {
                date: "2pm - 3.30pm",
                title: "Intro to Nuxt.JS and TailwindCSS",
                desc: "by Aung Kaung Myat",
            },
            {
                date: "7pm - 8.30pm",
                title: "Intro to Next.JS",
                desc: "by Vadapalli Dedeep Sai and Raghav Kumar",
            },
        ],
    },
    {
        date: "5th Sept",
        events: [
            {
                date: "10am - 12pm",
                title: "Intro to CI/CD",
                desc: "by Mahir Shah and Hugo Maximus Lim",
            },
            {
                date: "3pm - 5pm",
                title: "Intro to Flask (and PythonAnywhere)",
                desc: "by Yap Yuan Xi and Neil Bhandari",
            },
        ],
    },
    {
        date: "5th to 7th Sept",
        events: [
            {
                title: "Hackathon",
                desc: "You are tasked to solve a community need (can be related to Singapore) and submit it by 7 Sept 2359. Along with a website/webapp, you will have to prepare a deck of slides with your creativity process, features of your work and a demo.",
            },
        ],
    },
];

useSeoMeta({
    title: 'Sept Conference - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'Sept Conference - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img5.jpg',
    ogUrl: 'https://new.buildingblocs.sg/events/sept',
    twitterTitle: 'Sept Conference - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img5.jpg',
    twitterCard: 'summary_large_image'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})
</script>