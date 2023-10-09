<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <PatchesLarger />
                    <div class="mx-auto lg:max-w-7xl lg:flex justify-center max-w-lg px-8 sm:px-0">
                        <div class="text-left sm:pb-8 max-w-xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                March Conference</h1>
                            <h2 class="text-3xl mt-6 font-semibold tracking-tight text-gray-900 dark:text-white">
                                Key Details</h2>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                Dates: 12th - 13th March for workshops, 16th March for Starvation competition <br>
                                Venue: Online <br>
                                Email contact for queries:
                                <NuxtLink to="mailto:hello@buildingblocs.sg"
                                    class="text-orange-500 dark:text-orange-400 hover:underline">
                                    hello@buildingblocs.sg
                                </NuxtLink>
                            </p>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                The March Conference aims to foster an interest in programming by featuring three beginner-level workshops on Python, Data Analytics, and HTML, CSS and Javascript. To put your learning to the test, try out "Starvation", our very own open-source hackathon that sums up the conference!
                            </p>


                            <div class="text-left max-w-xl mt-12">
                                <h2 class="text-3xl mt-6 font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Starvation Competition</h2>
                                <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                    Capping off the March Conference will be a contest, but one that might catch some off guard. 
                                    Unlike the classic Hackathon adopted in the June Conference, 
                                    we will instead be organising our very own “Hackathon” for open-source ー Starvation. 
                                    It’s an open source gamified coding platform inspired by 
                                    <NuxtLink href="https://codecombat.com/" class="text-orange-500 dark:text-orange-400 hover:underline">CodeCombat</NuxtLink>, 
                                    with the gameplay influenced by 
                                    <NuxtLink href="https://battlecats.club/en/series/battlecats/" class="text-orange-500 dark:text-orange-400 hover:underline">BattleCats</NuxtLink>. 
                                    Solve coding challenges by applying your 
                                    Python and data skills from the workshops for a beginner progression!
                                </p>
                            </div>

                            <div class="pb-10 sm:pb-12 mt-6">
                                <Disclosure
                                v-for="(faq, index) in faqs"
                                :key="index"
                                v-slot="{ open }"
                                >
                                    <DisclosureButton
                                        class="mt-2 flex items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left sm:text-xl text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 text-md font-semibold tracking-tight w-full"
                                    >
                                        <span>{{ faq.question }}</span>
                                        <ChevronUpIcon
                                        :class="open ? 'rotate-180 transform' : ''"
                                        class="h-5 w-5 text-orange-500"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel
                                        class="px-4 py-4 pb-2 text-lg text-gray-600 dark:text-slate-300"
                                    >
                                        <span v-html="faq.answer"></span>
                                    </DisclosurePanel>
                                </Disclosure>
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
                                                <!-- <p class="sm:text-lg text-md text-gray-600 dark:text-slate-300">
                                                    {{ event.desc }}
                                                </p> -->
                                                
                                                <div class="flex items-center">
                                                    <p class="sm:text-lg text-md grow text-gray-600 dark:text-slate-300">
                                                        {{ event.desc }}
                                                    </p>
                                                    <NuxtLink v-if="event.youtube"
                                                    :href="event.youtube"
                                                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-4"
                                                    >
                                                    <IconsYoutube />
                                                    </NuxtLink>

                                                </div>
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

function link(text, url) {
  return `<a href="${url}" class="text-orange-500 dark:text-orange-400 hover:underline">${text}</a>`;
}

const faqs = [
    {
        question: "Are the workshops / Starvation competition online?",
        answer: "Yes, our march conference is held on Microsoft Teams."
    },
    {
        question: "Why should I sign up?",
        answer: "You can learn a whole lot of new skills and its (arguably) fun!"
    },
    {
        question: "How will I receive my prizes if I win during the Starvation competition?",
        answer: "We will pass you the prizes through your school leads or mail them to you if your school does not have any organisers in BuildingBloCS. Do note that prizes are only available for students residing in Singapore due to logistical constraints."
    },
    {
        question: "What are the prizes?",
        answer: "They are still unconfirmed. All we can reveal at this stage is that it will be likely given out to the Top 3 from each of the JC / Secondary categories."
    },
    {
        question: "Must I sign up for all workshops / hackathons?",
        answer: "No, just select those you are interested in."
    },
    {
        question: "What if something pops up and I can’t make it?",
        answer: `
            Email us at ${link(
            "hello@buildingblocs.sg",
            "mailto:hello@buildingblocs.sg",
            )}
            or approach us on ${link("Discord", "https://discord.gg/VSHyrbsJFs")} 
            in any appropriate channels and we will update your signup status accordingly.
            `,
    },
    {
        question: "Must I be present the entire time for the Starvation Competition?",
        answer: `
            Nope, you can participate in the competition at your own pace. 
            But do note that the competition closes at <b>5pm SGT</b>.
        `
    },
];
const timelines = [
    {
        date: "12th March",
        events: [
            {
                date: "10am - 1pm",
                title: "Introduction to Python",
                author: "by Khoo Kai Wen, Karimi Zayan and Prannaya Gupta",
                desc: "This extensive workshop equips you with foundational Python skills such as basic data types, if statements, comparisons, loops and more!",
                youtube: "https://www.youtube.com/watch?v=_sBc1KkuezU"
            },
            {
                date: "2pm - 5pm",
                title: "Introduction to Data Analytics",
                author: "by Khoo Kai Wen and Ma Jinghong",
                desc: "Pick up NumPy, Pandas and Matplotlib skills and learn their basic operations and applications, essential for analysing trends and data with Python.",
                youtube: "https://www.youtube.com/watch?v=9DnRF-1tuRQ"
            },
        ],
    },
    {
        date: "13th March",
        events: [
            {
                date: "10am - 12pm",
                title: "Introduction to HTML, CSS and Javascript",
                author: "by Ian Goh and Ishneet Singh",
                desc: "Wonder how websites are made? Experience the process yourself. Learn how to design a simple website from our experienced volunteers in this workshop!",
                youtube: "https://www.youtube.com/watch?v=fWl7uQm2zc8"
            }
        ],
    },
    {
        date: "16th March",
        events: [
            {
                date: "9am - 5pm",
                title: "Starvation Competition"
            },
        ],
    },
];

useSeoMeta({
    title: 'March Conference - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'March Conference - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img5.jpg',
    ogUrl: 'https://buildingblocs.sg/events/march',
    twitterTitle: 'March Conference - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img5.jpg',
    twitterCard: 'summary_large_image'
})
</script>