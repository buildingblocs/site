<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
            <div class="relative isolate pt-14 lg:px-8">
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#eae2b7] to-[#fcbf49] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="mx-auto max-w-4xl">
                    <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-10 sm:pb-24">Our Team</h1>
                    </div>
                </div>
                <div class="px-2">
                    <TeamOic />
                    <TeamExco />
                    <TeamOrg />
                    <TeamWs />
                </div>
                <Footer />
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Our Team - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'Our Team - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img3.png',
    ogUrl: 'https://new.buildingblocs.sg/team',
    twitterTitle: 'Our Team - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img3.png',
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