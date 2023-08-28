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
                                <NuxtLink to="mailto:hello@buildingblocs.sg"
                                    class="text-orange-500 dark:text-orange-400 hover:underline">
                                    hello@buildingblocs.sg
                                </NuxtLink>
                            </p>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">BuildingBloCS’s
                                annual September conference will be happening on <b>3rd, 4th and 5th Sept</b> virtually.
                                This year’s conference will be on <b>Web Development.</b></p>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">We have closed signups due to overwhelming demand. Please email us for any queries. We hope to see you at our future events!
                            </p>
                            <div>
                                <div class="mt-6">
                                    <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }">
                                        <DisclosureButton
                                            class="mt-2 flex items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left sm:text-xl text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 text-md font-semibold tracking-tight w-full">
                                            <span>{{ faq.question }}</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                                                class="h-5 w-5 text-orange-500" />
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-lg text-gray-600 dark:text-slate-300">
                                            {{ faq.answer }}
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Disclosure v-slot="{ open }">
                                        <DisclosureButton
                                            class="mt-2 flex items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left sm:text-xl text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 text-md font-semibold tracking-tight w-full">
                                            <span>What if something pops up and I can't make it?</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                                                class="h-5 w-5 text-orange-500" />
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-lg text-gray-600 dark:text-slate-300">
                                            Email us at
                                            <NuxtLink to="mailto:hello@buildingblocs.sg"
                                                class="text-orange-300 hover:underline">
                                                hello@buildingblocs.sg
                                            </NuxtLink>
                                            or approach us on Discord in any appropriate channels and we will update your
                                            signup status
                                            accordingly.
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                            </div>
                        </div>
                        <div class="mx-1 md:mx-7">
                            <div class="mx-1 md:mx-7 max-w-lg">
                                <div class="mx-1 md:mx-7 max-w-lg">
                                    <div v-for="timeline in timelines" :key="timeline.date">
                                        <h1
                                            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                            {{ timeline.title }}
                                        </h1>
                                        <h2
                                            class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white mb-4">
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
                                                    class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                                                    {{ event.title }}
                                                </h3>
                                                <p class="sm:text-lg text-md text-gray-600 dark:text-slate-300">
                                                    {{ event.desc }}
                                                </p>
                                                <p class="text-md text-gray-500 dark:text-slate-400">
                                                    {{ event.author }}
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const faqs = [
    {
        question: "Must I go for all workshops?",
        answer: "Not at all! You can choose which workshops you would like to attend.",
    },
    {
        question: "Why should I sign up?",
        answer: "You can learn a whole lot of new skills and it’ll be really fun!",
    },
    {
        question: "Is the event free?",
        answer: "Yep, thanks to our generous sponsors, it’s completely free!",
    },
    {
        question: "Are there prizes?",
        answer: "There are prizes including Sony Headphones and Amazon gift cards for every member of the winning group!",
    },
    {
        question: "How will the hackathon groups be allocated?",
        answer: "The hackathon will be carried out in groups of three. You may indicate who you would like to be grouped with (make sure it's mutual) and we'll take that into consideration. We'll fill any empty slots randomly, taking into consideration your school and age to ensure a pleasant collaboration experience!",
    },
];
const timelines = [
    {
        date: "3rd Sept",
        events: [
            {
                date: "10am - 11.30am",
                title: "Intro to Design Thinking and Figma",
                author: "by Du Yuhan and Cervon Wong",
                desc: "Less design thinking, more design."
            },
            {
                date: "3pm - 5pm",
                title: "Intro to HTML/CSS/JS",
                author: "by Justin Chee, Oon Zheng Kang, Saw Ze Dong and Harry Cheong",
                desc: "Introduction to the basics of how a website is made."
            },
            {
                date: "7pm - 9pm",
                title: "Intro to Vue",
                author: "by Mayukh Das and Lee I-Shiang",
                desc: "An introduction to Vue, a Javascript Framework."
            },
        ],
    },
    {
        date: "4th Sept",
        events: [
            {
                date: "10am - 12pm",
                title: "Intro to React",
                author: "by Liu Wenkai and “Peter” Zeyu Yao",
                desc: "Learn about React’s component-based design and ship a site using it."
            },
            {
                date: "2pm - 3.30pm",
                title: "Intro to Nuxt.JS and TailwindCSS",
                author: "by Aung Kaung Myat",
                desc: "Learn how to build a website for yourself in SPA mode, hosted on Netlify."
            },
            {
                date: "7pm - 8.30pm",
                title: "Intro to Next.JS",
                author: "by Vadapalli Dedeep Sai and Raghav Kumar",
                desc: "Learn about Next components and server side rendering. Host a simple blog webapp using Vercel."
            },
        ],
    },
    {
        date: "5th Sept",
        events: [
            {
                date: "10am - 12pm",
                title: "Intro to Website Deployment",
                author: "by Mahir Shah and Hugo Maximus Lim",
                desc: "Learn how to host your website."
            },
            {
                date: "3pm - 5pm",
                title: "Intro to Flask (and PythonAnywhere)",
                author: "by Yap Yuan Xi and Neil Bhandari",
                desc: "Look at how Flask connects your Python code to the internet, and ship a data scraping app using it."
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