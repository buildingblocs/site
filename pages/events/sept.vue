<template>
    <div class="bg-white dark:bg-slate-800">

        <head>
            <title>September Conference - BuildingBlocs 2023</title>
        </head>
        <div>
            <Nav />
            <div class="pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#9fa39c] to-[#ffc8c8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto lg:max-w-7xl lg:flex justify-center max-w-lg px-10 sm:px-0">
                        <div class="text-left pb-24 max-w-xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                September Conference</h1>
                            <p
                                class="mt-6 text-lg leading-8 font-mono font-bold text-gray-600 dark:text-slate-300 max-w-md">
                                3rd Sept - 5th Sept 2023</p>
                            <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300 max-w-md">The September
                                Conference is our
                                virtual computing event. This year, the theme is Web Development.</p>
                        </div>
                        <div class="mx-4 md:mx-7">
                            <h2
                                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-5 text-left">
                                Day 1</h2>
                            <EventsSept1 class="mb-10" />
                            <h2
                                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-5 text-left">
                                Day 2</h2>
                            <EventsSept2 class="mb-10" />
                            <h2
                                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-5 text-left">
                                Day 3</h2>
                            <EventsSept3 />
                        </div>
                    </div>
                    <EventsCta />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>