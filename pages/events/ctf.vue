<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <PatchesLarger />
                    <div class="mx-auto lg:max-w-7xl lg:flex justify-center max-w-lg px-8 sm:px-0">
                        <div class="text-left sm:pb-8 max-w-xl pb-10">
                            <div class="mb-8 md:mb-0">
                              <div class="flex items-center justify-center md:pb-2">
                                <nuxt-img format="webp" src="/logo.png" class="mr-1 h-8" alt="Our Logo" />
                                <span
                                    class="self-center text-2xl mr-3 font-semibold whitespace-nowrap dark:text-white">
                                    BuildingBloCS
                                </span>
                                <span class="ctf-subtitle text-medium font-medium text-gray-900 dark:text-white">
                                    PRESENTS
                                </span>
                              </div>
                            </div>
                            <h1 class="text-center ctf-title text-7xl font-bold text-gray-900 sm:text-9xl dark:text-white">
                                blahaj ctf
                            </h1>
                            <h2 class="text-center ctf-subtitle text-md sm:text-lg font-medium text-gray-900 dark:text-white">
                                2ND DECEMBER • 9AM - 9PM • ONLINE
                            </h2>

                            <p class="text-center mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                BuildingBloCS's collaboration with Team Blahaj brings you... 
                                <b>BlahajCTF</b>! This beginner-friendly capture-the-flag 
                                tournament is for all those interested in cybersecurity, fun 
                                and BLÅHAJ!
                            </p>

                            <p class="text-center text-sm sm:text-md leading-8 ctf-code font-medium">
                                <span class="font-extrabold">$</span> PING <a href="https://go.buildingblocs.sg/ctf/discord" class="hover:underline hover:font-extrabold">GO.BUILDINGBLOCS.SG/CTF/DISCORD</a>
                            </p>

                            <!-- <h2 class="text-3xl mt-6 font-semibold tracking-tight text-gray-900 dark:text-white">
                                Key Details
                            </h2>
                            <p class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300">
                                Date: 2nd December <br>
                                Venue: Online <br>
                                Email contact for queries:
                                <NuxtLink to="mailto:hello@buildingblocs.sg" class="text-orange-500 dark:text-orange-400 hover:underline">hello@buildingblocs.sg</NuxtLink>
                            </p> -->
                            
                            
                            <div>
                                <div class="mt-6">
                                    <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }">
                                        <DisclosureButton
                                            class="mt-2 flex items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left sm:text-xl text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75 text-md font-semibold tracking-tight w-full">
                                            <span>{{ faq.question }}</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                                                class="h-5 w-5 text-orange-500" />
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 py-4 pb-2 text-lg text-gray-600 dark:text-slate-300">
                                            <span v-html="faq.answer"></span>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                            </div>


                        </div>
                        <div class="mx-1 md:mx-7">
                            <div class="mx-1 md:mx-7 max-w-lg">
                                <div class="mx-1 md:mx-7 max-w-lg">
                                    <nuxt-img format="webp" src="/ctf/poster.png" alt=""
                                        class="object-cover object-center w-full max-h-[25rem] lg:max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 mt-12">
                        <div class="text-700 text-center">
                            <div class="text-blue-600 font-bold mb-3 flex justify-center items-center"><IconsDiscord /><span class="ml-2">POWERED BY DISCORD</span></div>
                            <div class="text-900 font-bold text-5xl mb-3 text-gray-900 dark:text-white">
                                Join our Beginner-Friendly CTF!
                            </div>
                            <div class="text-700 text-2xl mb-5 text-gray-600 dark:text-gray-400">
                                For all those interested in Cybersecurity, Fun and Blahaj!
                            </div>
                            <div class="align-center text-center justify-center flex">
                            <NuxtLink href="https://go.buildingblocs.sg/ctf/discord" 
                                class="font-bold px-5 py-3 rounded-3xl w-36 bg-indigo-500 hover:bg-indigo-600 text-white flex justify-center items-center">
                                <IconsDiscord /><span class="ml-2">Join Now</span>
                                <!-- Sign Up! -->
                            </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <!-- <EventsCta /> -->
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
    return `<a href="${url}" class="text-orange-500 dark:text-orange-400 hover:underline">${text}</a>`
}

const faqs = [
    {
        question: "What is a CTF event?",
        answer: "A CTF event is a competition in which participants solve a series of challenges, often related to cybersecurity, to earn points or '<i>flags</i>'. CTF events can be held online or in-person, and they can be organized by universities, companies, or other organizations.",
    },
    {
        question: "What types of challenges are included in a CTF event?",
        answer: `
        CTF events typically include a variety of different challenge categories, including:
        <ul class="list-disc list-outside ml-6">
            <li><b>Pwn</b>: Exploitation challenges involving vulnerabilities and reverse engineering.</li>
            <li><b>Crypto</b>: Challenges related to cryptographic puzzles and ciphers.</li>
            <li><b>Web</b>: Challenges involving web application vulnerabilities.</li>
            <li><b>Forensics</b>: Challenges analyzing digital evidence.</li>
            <li><b>Misc</b>: A catch-all for diverse challenges.</li>
        </ul>`,
    },
    {
        question: "What resources are available for learning more about CTFs and the different challenge categories?",
        answer: `
        There are many resources available for learning about CTFs and the different challenge categories. Some good places to start include:

        <ul class="list-disc list-outside ml-6">
            <li>${link('The CTF Field Guide', 'https://trailofbits.github.io/ctf')}</li>
            <li>${link('The CTFTime Website', 'https://ctftime.org')}</li>
            <li>${link('The CTF Subreddit', 'https://www.reddit.com/r/ctf')}</li>
            <li>${link('The pwnable.kr Website', 'https://pwnable.tw')}</li>
            <li>${link('The Cryptopals Website', 'https://cryptopals.com')}</li>
            <li>${link('The Web Security Academy', 'https://portswigger.net/web-security')}</li>
        </ul>`,
    },
    // {
    //     question: "Must I go for all the workshops?",
    //     answer: "No, not at all! The workshops are for beginners, and you are free to pop in and join whichever one you like!",
    // },
    {
        question: "Is this group or individual, and how are groups allocated?",
        answer: "It's in groups of up to 4 people, and you can sign up with other participants to be in the same group.",
    },
    {
        question: "What if something pops up and I can't make it?",
        answer: `
        Email us at ${link('hello@buildingblocs.sg', 'mailto:hello@buildingblocs.sg')}
        or approach us on Discord in any appropriate channels and we will update your
        signup status accordingly.`
    }
];

useSeoMeta({
    title: 'BBCS × BlahajCTF - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'BBCS × BlahajCTF - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img5.jpg',
    ogUrl: 'https://buildingblocs.sg/events/ctf',
    twitterTitle: 'BBCS × BlahajCTF - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img5.jpg',
    twitterCard: 'summary_large_image'
})
</script>
<style>
.ctf-title {
    font-family: 'League Spartan', 'Inter var', sans-serif;
    letter-spacing: -3px;
}

.ctf-subtitle {
    font-family: 'Inter var', sans-serif;
    letter-spacing: 4px;
}

.ctf-code {
    font-family: 'Consolas', monospace;
    color: #FFAB00;
    letter-spacing: 4px;
}
</style>