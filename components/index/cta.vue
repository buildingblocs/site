<template>
    <div class="bg-white dark:bg-slate-800">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-900 dark:bg-slate-900 px-6 pt-16 sm:pt-32 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 xl:gap-x-20 lg:px-24 lg:pt-0">
                <svg viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                        fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                <div class="mx-auto max-w-xs text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Us</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">for the March Conference to learn coding, the best
                      way.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <NuxtLink to="https://lu.ma/march-conf"
                            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Register now <span aria-hidden="true"></span></NuxtLink>
                        <NuxtLink to="/events/march" class="text-sm font-semibold leading-6 text-white">Learn more
                          <span aria-hidden="true">→</span></NuxtLink>
                    </div>
                </div>
                <div class="pt-7">
                    <div class="lg:absolute bg-white/5 ring-1 lg:rounded-l-lg rounded-t-lg ring-white/10 lg:w-[46rem]">
                        <nuxt-img format="webp"
                                  alt="An image of a lady with a FossAsia lanyard holding a laptop in a auditorium"
                                  class="lg:rounded-l-lg rounded-t-lg" src="/index/img5.webp" />
                    </div>
                </div>
            </div>
        </div>
</div></template>