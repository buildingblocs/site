<template>
    <div class="bg-white dark:bg-slate-800">

        <head>
            <title>Our Partners - BuildingBlocs 2023</title>
        </head>
        <div>
            <Nav />
            <div class="pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cdb4db] to-[#ffc8dd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-7xl">
                        <div class="text-center">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-24">
                                Our Partners</h1>
                        </div>
                        <partners :title="title1" :desc="desc1" :img="img1" />
                    </div>
                    <EventsCta />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PartnersCard from '/components/partners.vue'

export default {
    components: {
        PartnersCard
    },
    data() {
        return {
            img1: '/partners/bettersg.svg',
            title1: 'Better.sg',
            desc1: 'BuildingBloCS is the largest nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.',
        };
    }
}
</script>