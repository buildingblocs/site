<template>
    <div class="bg-white dark:bg-slate-800">

        <head>
            <title>Default - BuildingBlocs 2023</title>
        </head>
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cdb4db] to-[#ffc8dd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-7xl">
                        <div class="text-center">
                            <h1
                                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-10 sm:pb-24">
                                Default</h1>
                        </div>
                        <div class="mx-4 md:mx-7 grid">
                            <div class="gap-4 grid mb-2">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                    Display Large (Default)</h1>
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                    Display Medium</h2>
                                <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                    Display Small</h3>
                            </div>
                            <div class="gap-2 grid">
                                <h3 class="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                                    Title Large (Default)</h3>
                                <h4 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                                    Title Medium</h4>
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                                    Title Small</h5>
                            </div>
                            <div>
                                <p class="text-lg leading-8 text-gray-600 dark:text-slate-300">Paragraph (Default)</p>
                                <p class="text-lg leading-8 text-gray-600 dark:text-slate-300 font-mono">Mono
                                </p>
                            </div>
                            <!-- content goes here -->
                            <TeamCard />
                        </div>
                    </div>
                    <EventsCta />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>