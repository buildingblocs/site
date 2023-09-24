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
                  <section>
                    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                      <div class="mx-auto mb-8 max-w-screen-xl lg:mb-16">
                        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our OICs</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">BuildingBloCS 2023 is led by a set of <s>charismatic</s> passionate overall ICs who overlook various departments within the organisation. Having worked together on organising BuildingBloCS 2022 last year, the organisers aim to help make BuildingBloCS 2023 even bigger and more far-reaching than ever before.</p>
                      </div>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOic" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp" class="w-32 h-32 mb-3 rounded-full shadow-lg" :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </section>
                  <section class="py-24">
                    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                      <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Executive Committee (Exco)</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.</p>
                      </div>
                      <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-8 text-left">June Conference</h2>
                      <div class="flex flex-wrap justify-center">
                        <div v-for="(teamMember, index) in teamMembersExco" :key="index" class="m-2">
                          <div
                              class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                            <div class="px-4 pt-4 flex justify-between">
                              <div class="text-left">
                                <div class="space-x-2">
                                  <TeamBadgesDec v-if="teamMember.dec" />
                                  <TeamBadgesFoss v-if="teamMember.foss" />
                                  <TeamBadgesJune v-if="teamMember.june" />
                                  <TeamBadgesLead v-if="teamMember.lead" />
                                  <TeamBadgesMarch v-if="teamMember.march" />
                                  <TeamBadgesSep v-if="teamMember.sep" />
                                </div>
                              </div>
                              <div class="text-right">
                                <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                  </svg>
                                </NuxtLink>
                                <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                    <path d="M3 5.012H0V15h3V5.012Z"/>
                                  </svg>
                                </NuxtLink>
                                <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                       fill="none" viewBox="0 0 21 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                  </svg>
                                </NuxtLink>
                              </div>
                            </div>
                            <div class="flex flex-col items-center">
                              <nuxt-img format="webp" class="w-32 h-32 mb-3 rounded-full shadow-lg" :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                              <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                              <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                      <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Organisers</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!</p>
                      </div>
                      <div>
                        <h2 class="text-3xl tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Emcees</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgEmcees" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp" class="w-32 h-32 mb-3 rounded-full shadow-lg" :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Human Resources</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgHR" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp" class="w-32 h-32 mb-3 rounded-full shadow-lg" :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Quality Assurance</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgQA" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <img
                                          class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                           :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Workshop Admin</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgWA" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp"
                                    class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                    :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Publicity & Design</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgPD" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <img
                                    class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                    :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5 class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Hackathon</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgHack" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp"
                                    class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                    :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5
                                    class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white mx-1">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">Development</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgDev" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp"
                                    class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                    :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5
                                    class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white mx-1">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">BBCS x BlahajCTF Organisers</h2>
                        <div class="flex flex-wrap justify-center">
                          <div v-for="(teamMember, index) in teamMembersOrgBbo" :key="index" class="m-2">
                            <div
                                class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                              <div class="px-4 pt-4 flex justify-between">
                                <div class="text-left">
                                  <div class="space-x-2">
                                    <TeamBadgesDec v-if="teamMember.dec" />
                                    <TeamBadgesFoss v-if="teamMember.foss" />
                                    <TeamBadgesJune v-if="teamMember.june" />
                                    <TeamBadgesLead v-if="teamMember.lead" />
                                    <TeamBadgesMarch v-if="teamMember.march" />
                                    <TeamBadgesSep v-if="teamMember.sep" />
                                  </div>
                                </div>
                                <div class="text-right">
                                  <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 15 15">
                                      <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                      <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                  </NuxtLink>
                                  <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 21 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                  </NuxtLink>
                                </div>
                              </div>
                              <div class="flex flex-col items-center">
                                <nuxt-img format="webp"
                                    class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                    :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                                <h5
                                    class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white mx-1">{{ teamMember.name }}</h5>
                                <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="py-24">
                    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                      <div class="mx-auto mb-8 max-w-screen-xl lg:mb-16">
                        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Workshop
                          Speakers</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">BuildingBloCS 2023 boasts a wide
                          variety of speakers from various unique and different backgrounds, all united in the singular goal of
                          spreading knowledge on various different disciplines.</p>
                      </div>
                      <div class="flex flex-wrap justify-center">
                        <div v-for="(teamMember, index) in teamMembersWs" :key="index" class="m-2">
                          <div
                              class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-80 w-72">
                            <div class="px-4 pt-4 flex justify-between">
                              <div class="text-left">
                                <div class="space-x-2">
                                  <TeamBadgesDec v-if="teamMember.dec" />
                                  <TeamBadgesFoss v-if="teamMember.foss" />
                                  <TeamBadgesJune v-if="teamMember.june" />
                                  <TeamBadgesLead v-if="teamMember.lead" />
                                  <TeamBadgesMarch v-if="teamMember.march" />
                                  <TeamBadgesSep v-if="teamMember.sep" />
                                </div>
                              </div>
                              <div class="text-right">
                                <NuxtLink v-if="teamMember.githubLink" :to="teamMember.githubLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                  </svg>
                                </NuxtLink>
                                <NuxtLink v-if="teamMember.inLink" :to="teamMember.inLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                    <path d="M3 5.012H0V15h3V5.012Z"/>
                                  </svg>
                                </NuxtLink>
                                <NuxtLink v-if="teamMember.webLink" :to="teamMember.webLink"
                                          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                       fill="none" viewBox="0 0 21 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                  </svg>
                                </NuxtLink>
                              </div>
                            </div>
                            <div class="flex flex-col items-center">
                              <nuxt-img format="webp"
                                        class="w-32 h-32 mb-3 rounded-full shadow-lg"
                                        :src="teamMember.imageSrc" :alt="teamMember.name + ' image'" />
                              <h5
                                  class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white mx-1">{{ teamMember.name }}</h5>
                              <p class="text-sm text-gray-600 dark:text-slate-300 text-center mx-6">{{ teamMember.description }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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

const teamMembersOic = [
  {
    githubLink: 'https://github.com/oneytlam',
    inLink: 'https://linkedin.com/in/oneytlam',
    imageSrc: '/teams/ppl/yikting.png',
    name: 'Lam Yik Ting',
    description: "YT here - explorer of AI, Web Dev, and Cybersec. If I'm not listening to music, I'm probably on a BuildingBloCS call. :>"
  },
  {
    githubLink: 'https://github.com/teraSurfer40141',
    inLink: 'https://linkedin.com/in/yau-le-qi-045889234',
    imageSrc: '/teams/ppl/leqi.png',
    name: 'Yau Le Qi',
    description: "Hi, I'm Le Qi, a JC2 student from TJC. I like all things computers 😎."
  },
  {
    githubLink: 'https://github.com/ThePyProgrammer',
    inLink: 'https://linkedin.com/in/prannaya-gupta',
    webLink: 'https://prannay.dev/',
    imageSrc: '/teams/ppl/prannay.jpg',
    name: 'Prannaya Gupta',
    description: "Hi I'm Prannaya, a JC2 Student at NUSH and I like training AI, developing software and golfing the hell out of some code 🙂."
  },
];

const teamMembersExco = [
  {
    githubLink: 'https://github.com/deadly-nightshade',
    imageSrc: '/teams/ppl/kaiwen.jpg',
    name: 'Khoo Kai Wen',
    description: "Hi, I'm a JC1 Student at NUSH"
  },
  {
    githubLink: 'https://github.com/waffleSheep',
    inLink: 'https://linkedin.com/in/karimi-zayan-1a64a8264',
    imageSrc: '/teams/ppl/zayan.jpg',
    name: 'Zayan Karimi',
    description: "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail."
  },
  {
    githubLink: 'https://github.com/TwelvePenguins',
    inLink: 'https://linkedin.com/in/yuhan-du-12p3ngu5',
    imageSrc: '/teams/ppl/duyuhan.jpeg',
    name: 'Du Yuhan',
    description: "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer."
  },
  {
    githubLink: 'https://github.com/shindeux',
    inLink: 'https://linkedin.com/in/cher-jin-en-675092235',
    imageSrc: '/teams/ppl/cherjinen.jpeg',
    name: 'Cher Jin En',
    description: "Hi, I listen to MAMAMOO and play Solitaire for fun"
  },
  {
    githubLink: 'https://github.com/Tsk78',
    inLink: 'https://linkedin.com/in/suraj-kumar-2839b4233',
    imageSrc: '/teams/ppl/suraj.png',
    name: 'Suraj Kumar',
    description: "Hello, I'm Suraj and coding with black coffee and music is my thing."
  },
  {
    githubLink: 'https://github.com/flame-staff',
    imageSrc: '/teams/ppl/bryant.jpeg',
    name: 'Bryant Shi',
    description: "Yo My name is Bryant. I am a fellow CS student and heavily enjoy games"
  },
  {
    githubLink: 'https://github.com/RenoirTan',
    imageSrc: '/teams/ppl/renoir.jpg',
    name: 'Renoir Tan',
    description: "I'm a JC2 Student at RI."
  },
  {
    githubLink: 'https://github.com/idkSeth',
    inLink: 'https://linkedin.com/in/seth-yong-00672b229',
    imageSrc: '/teams/ppl/seth.jpeg',
    name: 'Seth Olav Yong',
    description: "Hi, I'm Seth, a Poly 2 student from SP."
  },
  {
    githubLink: 'https://github.com/Haloen',
    inLink: 'https://linkedin.com/in/yuan-xi-yap-5b3205242',
    imageSrc: '/teams/ppl/yuanxi.jpg',
    name: 'Yap Yuan Xi',
    description: "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development."
  },
];

const teamMembersOrgEmcees = [
  {
    githubLink: 'https://github.com/waffleSheep',
    inLink: 'https://linkedin.com/in/karimi-zayan-1a64a8264',
    imageSrc: '/teams/ppl/zayan.jpg',
    name: 'Zayan Karimi',
    description: "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail."
  },
  {
    githubLink: 'https://github.com/AppleGesus',
    imageSrc: '/teams/ppl/sanke_mahit.jpg',
    name: 'Sanke Mahit',
    description: "My name is Sanke Mahit and I am in JC2 this year!"
  },
  {
    githubLink: 'https://github.com/Dhanvine321',
    inLink: 'https://linkedin.com/in/dhanvine-rameshkumar',
    imageSrc: '/teams/ppl/dhanvine.jpg',
    name: 'Dhanvine Rameshkumar',
    description: "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!"
  },
];

const teamMembersOrgHR = [
  {
    lead: true,
    githubLink: 'https://github.com/Tsk78',
    inLink: 'https://linkedin.com/in/suraj-kumar-2839b4233',
    imageSrc: '/teams/ppl/suraj.png',
    name: 'Suraj Kumar',
    description: "Hello, I'm Suraj and coding with black coffee and music is my thing."
  },
  {
    lead: true,
    githubLink: 'https://github.com/Kweice',
    inLink: 'https://linkedin.com/in/isaac-kok',
    imageSrc: '/teams/ppl/isaac.jpg',
    name: 'Isaac Kok',
    description: "Hi I'm Isaac. I do card tricks, listen to mandopop and my favourite artist is Joker Xue."
  },
  {
    githubLink: 'https://github.com/ozk100',
    imageSrc: '/teams/ppl/oon_zheng_kang.jpg',
    name: 'Oon Zheng Kang',
    description: "Hi, I'm Zheng Kang, a JC1 student from DHS."
  },
  {
    githubLink: 'https://github.com/python-noob-dotcom',
    inLink: 'https://linkedin.com/in/eugene-ang-8ab711264',
    imageSrc: '/teams/ppl/eugeneang.jpg',
    name: 'Eugene Ang',
    description: "Hi, I'm Eugene and i believe that caffeine is a miracle drug"
  },
  {
    githubLink: 'https://github.com/Dhanvine321',
    inLink: 'https://linkedin.com/in/dhanvine-rameshkumar',
    imageSrc: '/teams/ppl/dhanvine.jpg',
    name: 'Dhanvine Rameshkumar',
    description: "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!"
  },
  {
    githubLink: 'https://github.com/sotong1337',
    inLink: 'https://linkedin.com/in/tan-swee-kang-rvhs-370aa8248',
    imageSrc: '/teams/ppl/swee_kang.jpg',
    name: 'Tan Swee Kang',
    description: "H2 computing student does CTF, competitive programming and competitions."
  },
  {
    githubLink: 'https://github.com/vi-nita',
    imageSrc: '/teams/ppl/adapaka_vinita.jpg',
    name: 'Adapaka Vinita',
    description: "I am a fast learner and am passionate about coding and programming. I also enjoy dancing."
  },
];

const teamMembersOrgQA = [
  {
    lead: true,
    githubLink: 'https://github.com/flame-staff',
    imageSrc: '/teams/ppl/bryant.jpeg',
    name: 'Bryant Shi',
    description: "Yo My name is Bryant. I am a fellow CS student and heavily enjoy games"
  },
  {
    githubLink: 'https://github.com/Armweak5104',
    imageSrc: '/teams/ppl/neil.png',
    name: 'Neil Bhandari',
    description: "I will be in JC1 in 2023. I code mainly in python and C++. I also fail captcha tests too much."
  },
  {
    githubLink: 'https://github.com/shzh05',
    imageSrc: '/teams/ppl/shawn_han.jpeg',
    name: 'Shawn Han Zhi Heng',
    description: "I am J2 in RVHS, I'm currently taking H2 Computing and it is my favourite subject as I enjoy coding."
  },
  {
    githubLink: 'https://github.com/Dragonslayer262',
    inLink: 'https://linkedin.com/in/james-tan-dejun',
    imageSrc: '/teams/ppl/james_tan.png',
    name: 'James Tan Dejun',
    description: "I'm a JC2 student in RVHS. I mainly enjoy doing competitive programming and machine learning."
  },
  {
    githubLink: 'https://github.com/plwanejexperto',
    imageSrc: '/teams/ppl/justin_wang.jpeg',
    name: 'Justin Wang',
    description: "I have an interest in designing UI and UX and I am passionate to learn more about computing :)"
  },
  {
    githubLink: 'https://github.com/sahanaaganesh',
    imageSrc: '/teams/ppl/blank.jpg',
    name: 'Sahana Ganesh',
    description: "I'm a student."
  },
  {
    githubLink: 'https://github.com/cervonwong',
    inLink: 'https://linkedin.com/in/cervonwong',
    webLink: 'https://cervonwong.com/',
    imageSrc: '/teams/ppl/cervon.jpg',
    name: 'Cervon Wong',
    description: "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎"
  },
  {
    githubLink: 'https://github.com/delargement',
    imageSrc: '/teams/ppl/vishal.png',
    name: 'Kannan Vishal',
    description: "Hey, I'm a sixth year from NUSH who likes post-punk, post-industrial and post-hardcore."
  },
  {
    githubLink: 'https://github.com/Haloen',
    inLink: 'https://linkedin.com/in/yuan-xi-yap-5b3205242',
    imageSrc: '/teams/ppl/yuanxi.jpg',
    name: 'Yap Yuan Xi',
    description: "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development."
  },
  {
    githubLink: 'https://github.com/hninsatphyusin',
    inLink: 'https://linkedin.com/in/hnin-sat-phyu-sin-54344b265',
    imageSrc: '/teams/ppl/hnin.jpg',
    name: 'Hnin Sat Phyu Sin',
    description: "🤡"
  },
  {
    githubLink: 'https://github.com/JunEe23',
    imageSrc: '/teams/ppl/junee.jpg',
    name: 'Cheah Jun Ee',
    description: "I take A level computing in jc and my combi is CCME."
  },
  {
    githubLink: 'https://github.com/edwinlmy5',
    imageSrc: '/teams/ppl/edwin_liew.jpg',
    name: 'Edwin Liew',
    description: "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    githubLink: 'https://github.com/arthurngTJC',
    imageSrc: '/teams/ppl/blank.jpg',
    name: 'Arthur Junior Ng',
    description: "I am a JC2 student from TJC."
  },
  {
    githubLink: 'https://github.com/AppleGesus',
    imageSrc: '/teams/ppl/sanke_mahit.jpg',
    name: 'Sanke Mahit',
    description: "My name is Sanke Mahit and I am in JC2 this year!"
  },
  {
    githubLink: 'https://github.com/DangerousPotential',
    inLink: 'https://linkedin.com/in/kim-wee-teh-963b9726a',
    imageSrc: '/teams/ppl/teh_kim_wee.jpg',
    name: 'Teh Kim Wee',
    description: "I'm Kim Wee, currently studying in ASRJC. Python is my main programming language"
  },
  {
    githubLink: 'https://github.com/xiyuan1avery',
    inLink: 'https://linkedin.com/in/xiyuan-zhang-b819a7242',
    imageSrc: '/teams/ppl/zhang_xiyuan.jpg',
    name: 'Zhang Xiyuan',
    description: "Hi im Xiyuan from VJC!!! I luv coffee, running, math & programming. Curious&Learn&Enjoy@BBCS2023"
  },
  {
    githubLink: 'https://github.com/cakular',
    imageSrc: '/teams/ppl/hugo.jpg',
    name: 'Hugo Maximus Lim',
    description: "Hi, I'm Hugo, a JC1 student from NUSH."
  },
];

const teamMembersOrgWA = [
  {
    lead: true,
    githubLink: 'https://github.com/deadly-nightshade',
    imageSrc: '/teams/ppl/kaiwen.jpg',
    name: 'Khoo Kai Wen',
    description: "Hi, I'm a JC1 Student at NUSH"
  },
  {
    lead: true,
    githubLink: 'https://github.com/waffleSheep',
    inLink: 'https://linkedin.com/in/karimi-zayan-1a64a8264',
    imageSrc: '/teams/ppl/zayan.jpg',
    name: 'Zayan Karimi',
    description: "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail."
  },
  {
    lead: true,
    githubLink: 'https://github.com/TwelvePenguins',
    inLink: 'https://linkedin.com/in/yuhan-du-12p3ngu5',
    imageSrc: '/teams/ppl/duyuhan.jpeg',
    name: 'Du Yuhan',
    description: "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer."
  },
  {
    lead: true,
    githubLink: 'https://github.com/shindeux',
    inLink: 'https://linkedin.com/in/cher-jin-en-675092235',
    imageSrc: '/teams/ppl/cherjinen.jpeg',
    name: 'Cher Jin En',
    description: "Hi, I listen to MAMAMOO and play Solitaire for fun"
  },
  {
    githubLink: 'https://github.com/Jiaxuan06',
    inLink: 'https://linkedin.com/in/jiaxuan-tang-ba383a264',
    imageSrc: '/teams/ppl/jiaxuan.jpg',
    name: 'Tang Jiaxuan',
    description: "Hello! I am Jiaxuan, a JC1 student from TJC annd I am a coffee addict 🤣"
  },
  {
    githubLink: 'https://github.com/ID-minh4354',
    imageSrc: '/teams/ppl/leducminh.jpeg',
    name: 'Le Duc Minh',
    description: "Hi, I'm a JC2 student from HCI."
  },
  {
    githubLink: 'https://github.com/jack-0000000',
    inLink: 'https://linkedin.com/in/lim-jack-tjc-1633b4277',
    imageSrc: '/teams/ppl/lim_jack.jpg',
    name: 'Lim Jack',
    description: "I am keen in learning more about computer science and developing my own programs."
  },
  {
    githubLink: 'https://github.com/Ash3926',
    imageSrc: '/teams/ppl/asha_solomon.jpg',
    name: 'Asha Solomon',
    description: "I'm Asha from TJC, I like running and crafts. Favorite subjects(at O's) are Maths and Physics :)"
  },
  {
    githubLink: 'https://github.com/IsoceledAsh',
    inLink: 'https://linkedin.com/in/ashley-alexster-1a1961278',
    imageSrc: '/teams/ppl/ashley_alexster.jpg',
    name: 'Ashley Alexster',
    description: "Hi, I'm Ashley! I have always been interested in CS stuff since I was young, and currently take Computing as a subject in JC"
  },
  {
    githubLink: 'https://github.com/kat-fly',
    imageSrc: '/teams/ppl/kashvi_kothari.jpg',
    name: 'Kothari Kashvi Chintan',
    description: "I have been a member of Infocomm Club since primary school. I currently take H2 computing."
  },
  {
    githubLink: 'https://github.com/mahaachu',
    imageSrc: '/teams/ppl/mahamantra_sivagnanam.jpeg',
    name: 'Mahamantra Sivagnanam',
    description: "Hi! My name's Mahamantra Sivagnanam. I really enjoy programming and coming up with new ideas and innovations"
  },
  {
    githubLink: 'https://github.com/Giganaer',
    imageSrc: '/teams/ppl/chee_justin.jpg',
    name: 'Chee Justin Suwattana',
    description: "Hi I'm Justin, a JC1 computing student in DHS who also likes playing guitar"
  },
  {
    githubLink: 'https://github.com/Gau567',
    inLink: 'https://linkedin.com/in/ghayathri-seetharaman-471422272',
    imageSrc: '/teams/ppl/blank.jpg',
    name: 'Anangore Seetharaman Ghayathri',
    description: "Passionate about AI and CS, aims to achieve in the industry. Enjoys crime/thriller books."
  },
];

const teamMembersOrgPD = [
  {
    lead: true,
    githubLink: 'https://github.com/MinJiaTse',
    imageSrc: '/teams/ppl/tseminjia.jpeg',
    name: 'Tse Min Jia',
    description: "Hello, I'm Min Jia :), a Year 5 student in Dunman High School. Nice to meet you! 😁"
  },
  {
    lead: true,
    githubLink: 'https://github.com/RenoirTan',
    imageSrc: '/teams/ppl/renoir.jpg',
    name: 'Renoir Tan',
    description: "I'm a JC2 Student at RI."
  },
  {
    githubLink: 'https://github.com/edwinlmy5',
    imageSrc: '/teams/ppl/edwin_liew.jpg',
    name: 'Edwin Liew',
    description: "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    githubLink: 'https://github.com/Zernier',
    imageSrc: '/teams/ppl/wayne_ang.jpg',
    name: 'Wayne Ang',
    description: "I am a JC2 from ACJC currently. I like reading books, listening to new music and playing the guitar."
  },
  {
    githubLink: 'https://github.com/cervonwong',
    inLink: 'https://linkedin.com/in/cervonwong',
    webLink: 'https://cervonwong.com/',
    imageSrc: '/teams/ppl/cervon.jpg',
    name: 'Cervon Wong',
    description: "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎"
  },
  {
    githubLink: 'https://github.com/Ninrolds6',
    imageSrc: '/teams/ppl/clara_lee.jpeg',
    name: 'Clara Lee',
    description: "I'm Clara from ASRJC! My CCA is badminton I take computing for A levels. I crochet and do coding in my free time"
  },
  {
    githubLink: 'https://github.com/antndrel',
    imageSrc: '/teams/ppl/andrel.jpg',
    name: 'Quoid Jing-Xuan Andrel',
    description: "Hello! I am Andrel from TJC"
  },
  {
    githubLink: 'https://github.com/celnat312',
    inLink: 'https://linkedin.com/in/celinenatalie',
    imageSrc: '/teams/ppl/celine_natalie.jpeg',
    name: 'Celine Natalie Wongso Lesmono',
    description: "I took H2 computing when I was in JC and I joined BBCS in 2021 and 2022!"
  },
  {
    githubLink: 'https://github.com/lh00000',
    inLink: 'https://linkedin.com/in/le-han-yau-5a6187261',
    imageSrc: '/teams/ppl/blank.jpg',
    name: 'Yau Le Han',
    description: "Sec 4 student exploring CS passion, with no experience, eager to learn and gain skills."
  },
  {
    githubLink: 'https://github.com/TAUVX',
    imageSrc: '/teams/ppl/sophia_chua.jpg',
    name: 'Sophia Chua',
    description: "I am interested in the Fine Arts and like to make art when inspiration strikes me."
  },
];

const teamMembersOrgHack = [
  {
    lead: true,
    githubLink: 'https://github.com/ka-bear',
    imageSrc: '/teams/ppl/kabir.png',
    name: 'Kabir Jain',
    description: "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI."
  },
  {
    lead: true,
    githubLink: 'https://github.com/RottenLemons',
    inLink: 'https://linkedin.com/in/mahir-shah-681aa0261',
    imageSrc: '/teams/ppl/mahir.png',
    name: 'Mahir Shah',
    description: "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes."
  },
  {
    githubLink: 'https://github.com/electron13',
    inLink: 'https://linkedin.com/in/ashwin-l-82968a202',
    imageSrc: '/teams/ppl/ashwin.jpg',
    name: 'Ashwin Lokesh',
    description: "I am Ashwin."
  },
  {
    githubLink: 'https://github.com/jedlimlx',
    imageSrc: '/teams/ppl/jed.png',
    name: 'Jed Lim',
    description: "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    githubLink: 'https://github.com/Ishneet0710',
    inLink: 'https://linkedin.com/in/ishneet-singh-a51697210',
    imageSrc: '/teams/ppl/ishneet.jpg',
    name: 'Ishneet Singh',
    description: "Hi, I'm Ishneet, a JC2 student from TJC."
  },
  {
    githubLink: 'https://github.com/LegiboY',
    imageSrc: '/teams/ppl/pann.jpg',
    name: 'Papangkorn Wangchochedkun',
    description: "Hi, my name is Pann. VJC J1, trying to comprehend this uncommented code. Used to be a Scrabble god."
  },
];

const teamMembersOrgDev = [
  {
    lead: true,
    githubLink: 'https://github.com/idkSeth',
    inLink: 'https://linkedin.com/in/seth-yong-00672b229',
    imageSrc: '/teams/ppl/seth.jpeg',
    name: 'Seth Olav Yong',
    description: "Hi, I'm Seth, a Poly 2 student from SP."
  },
  {
    lead: true,
    githubLink: 'https://github.com/squi-ddy',
    webLink: 'https://squiddy.me/',
    imageSrc: '/teams/ppl/wenkai.jpg',
    name: 'Liu Wenkai',
    description: "Hi, I'm Wenkai, a JC1 student from NUSH."
  },
  {
    lead: true,
    githubLink: 'https://github.com/Haloen',
    inLink: 'https://linkedin.com/in/yuan-xi-yap-5b3205242',
    imageSrc: '/teams/ppl/yuanxi.jpg',
    name: 'Yap Yuan Xi',
    description: "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development."
  },
  {
    githubLink: 'https://github.com/ka-bear',
    imageSrc: '/teams/ppl/kabir.png',
    name: 'Kabir Jain',
    description: "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI."
  },
  {
    githubLink: 'https://github.com/RottenLemons',
    inLink: 'https://linkedin.com/in/mahir-shah-681aa0261',
    imageSrc: '/teams/ppl/mahir.png',
    name: 'Mahir Shah',
    description: "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes."
  },
  {
    githubLink: 'https://github.com/jedlimlx',
    imageSrc: '/teams/ppl/jed.png',
    name: 'Jed Lim',
    description: "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    githubLink: 'https://github.com/Ishneet0710',
    inLink: 'https://linkedin.com/in/ishneet-singh-a51697210',
    imageSrc: '/teams/ppl/ishneet.jpg',
    name: 'Ishneet Singh',
    description: "Hi, I'm Ishneet, a JC2 student from TJC."
  },
  {
    githubLink: 'https://github.com/theriseof9',
    inLink: 'https://linkedin.com/in/wang-zerui-a21b41242',
    imageSrc: '/teams/ppl/zerui.jpg',
    name: 'Wang Zerui',
    description: "Hi I'm Zerui from NUSH, I like CTFs and blahajs!"
  },
  {
    githubLink: 'https://github.com/fwyr',
    imageSrc: '/teams/ppl/maweiyi.jpeg',
    name: 'Ma Weiyi',
    description: "Hello! I'm Weiyi, a DHS student who just happens to like computers."
  },
  {
    githubLink: 'https://github.com/sawzedong',
    inLink: 'https://linkedin.com/in/ze-dong-saw-9b3936242',
    webLink: 'https://sawzedong.github.io/portfolio/',
    imageSrc: '/teams/ppl/sawzedong.jpeg',
    name: 'Saw Ze Dong',
    description: "Hi, i'm a JC1 student from Dunman High, interested in programming websites, trying out AI and more"
  },
  {
    githubLink: 'https://github.com/Harry-cheong',
    inLink: 'https://linkedin.com/in/harry-cheong-72bbb5212',
    imageSrc: '/teams/ppl/harry.jpg',
    name: 'Cheong Jun Kai Harry',
    description: "I'm Harry. I love tinkering with tech. I love card throwing."
  },
  {
    githubLink: 'https://github.com/jeromepalayoor',
    inLink: 'https://linkedin.com/in/jeromepalayoor',
    webLink: 'https://jeromepalayoor.com/',
    imageSrc: '/teams/ppl/jerome_palayoor.png',
    name: 'Jerome Palayoor',
    description: "I love math and coding and recently picked up cyber security."
  },
  {
    githubLink: 'https://github.com/indaniel',
    imageSrc: '/teams/ppl/daniel_chua.jpg',
    name: 'Daniel Chua Han',
    description: "Hi, I'm Daniel, a JC2 student from SAJC. I occasionally do informatics."
  },
  {
    githubLink: 'https://github.com/cytronicoder',
    inLink: 'https://linkedin.com/in/cytronicoder',
    webLink: 'https://www.cytronicoder.com/',
    imageSrc: '/teams/ppl/peter.jpeg',
    name: 'Zeyu Yao (Peter)',
    description: "I'm a student developer currently studying in Singapore."
  },
  {
    githubLink: 'https://github.com/provsalt',
    inLink: 'https://linkedin.com/in/raymond-goo',
    webLink: 'https://www.raygoo.tech/',
    imageSrc: '/teams/ppl/raymond_goo.jpg',
    name: 'Raymond Goo',
    description: "I like doing things and stuff software related."
  },
  {
    inLink: 'https://linkedin.com/in/ma-jinghong-a18b5022',
    imageSrc: '/teams/ppl/jinghong.jpg',
    name: 'Ma Jinghong',
    description: "I am a J2 student from HCI, and take PCME. I hope to help out for this event and learn relevant skills :)"
  },
  {
    githubLink: 'https://github.com/Hars-raj',
    inLink: 'https://linkedin.com/in/raj-harsh-b92931241',
    imageSrc: '/teams/ppl/raj_harsh.png',
    name: 'Raj Harsh',
    description: "I am a JC2 student at YIJC, I take H2 computing and have an interest in programming and AI"
  },
];

const teamMembersOrgBbo = [
  {
    lead: true,
    githubLink: 'https://github.com/Haloen',
    inLink: 'https://linkedin.com/in/yuan-xi-yap-5b3205242',
    imageSrc: '/teams/ppl/yuanxi.jpg',
    name: 'Yap Yuan Xi',
    description: "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development."
  },
  {
    githubLink: 'https://github.com/theriseof9',
    inLink: 'https://linkedin.com/in/wang-zerui-a21b41242',
    imageSrc: '/teams/ppl/zerui.jpg',
    name: 'Wang Zerui',
    description: "Hi I'm Zerui from NUSH, I like CTFs and blahajs!"
  },
  {
    githubLink: 'https://github.com/azazazo',
    inLink: 'https://linkedin.com/in/tan-junheng-776037131',
    imageSrc: '/teams/ppl/tan_junheng.png',
    name: 'Tan Junheng',
    description: "biggest blåhaj fan🦈❤️❤️ i like crypto(graphy) and sometimes play ctfs"
  },
  {
    githubLink: 'https://github.com/Xenon1345',
    imageSrc: '/teams/ppl/christian.jpg',
    name: 'Christian James Tan',
    description: "ctf player, crypto and rev enthusiast and blåhaj's second biggest fan 🦈"
  },
  {
    githubLink: 'https://github.com/cryptoAlgorithm',
    inLink: 'https://linkedin.com/in/vincent-k-774963245',
    imageSrc: '/teams/ppl/kwok_vincent.jpg',
    name: 'Vincent Kwok',
    description: "I make beautiful cross-plarform experiences and sometimes do CTFs. ♥️ swift!"
  },
  {
    githubLink: 'https://github.com/jeromepalayoor',
    inLink: 'https://linkedin.com/in/jeromepalayoor',
    webLink: 'https://jeromepalayoor.com/',
    imageSrc: '/teams/ppl/jerome_palayoor.png',
    name: 'Jerome Palayoor',
    description: "I love math and coding and recently picked up cyber security."
  },
  {
    githubLink: 'https://github.com/jun-lsh',
    imageSrc: '/teams/ppl/justin_lim.jpg',
    name: 'Lim Sue Han Justin',
    description: "hi I'm Justin Lim from NUSH, I like rev and pwn lots. excessive user of the :slight_smile: emoji"
  },
  {
    githubLink: 'https://github.com/fishjojo1',
    inLink: 'https://linkedin.com/in/fishjojo1',
    imageSrc: '/teams/ppl/joeytang.jpeg',
    name: 'Joey Tang',
    description: ""
  },
];

const teamMembersWs = [
  {
    march: true,
    foss: true,
    june: true,
    githubLink: 'https://github.com/waffleSheep',
    inLink: 'https://linkedin.com/in/karimi-zayan-1a64a8264',
    imageSrc: '/teams/ppl/zayan.jpg',
    name: 'Zayan Karimi',
    description: "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail."
  },
  {
    march: true,
    githubLink: 'https://github.com/jcc-kh',
    inLink: 'https://linkedin.com/in/jessie-chin-kh',
    imageSrc: '/teams/ppl/jessie.jpg',
    name: 'Jessie Chin Kit Hey',
    description: ""
  },
  {
    march: true,
    foss: true,
    june: true,
    githubLink: 'https://github.com/deadly-nightshade',
    imageSrc: '/teams/ppl/kaiwen.jpg',
    name: 'Khoo Kai Wen',
    description: "Hi, I'm a JC1 Student at NUSH"
  },
  {
    march: true,
    foss: true,
    june: true,
    inLink: 'https://linkedin.com/in/ma-jinghong-a18b5022',
    imageSrc: '/teams/ppl/jinghong.jpg',
    name: 'Ma Jinghong',
    description: "I am a J2 student from HCI, and take PCME. I hope to help out for this event and learn relevant skills :)"
  },
  {
    march: true,
    june: true,
    githubLink: 'https://github.com/Ishneet0710',
    inLink: 'https://linkedin.com/in/ishneet-singh-a51697210',
    imageSrc: '/teams/ppl/ishneet.jpg',
    name: 'Ishneet Singh',
    description: "Hi, I'm Ishneet, a JC2 student from TJC."
  },
  {
    march: true,
    githubLink: 'https://github.com/TheRoundRoads',
    imageSrc: '/teams/ppl/ian.jpg',
    name: 'Ian Goh',
    description: "Hi I'm Ian Goh! I'm currently a JC2 computing student studying in DHS. I also enjoy watching anime!"
  },
  {
    foss: true,
    june: true,
    githubLink: 'https://github.com/python-noob-dotcom',
    inLink: 'https://linkedin.com/in/eugene-ang-8ab711264',
    imageSrc: '/teams/ppl/eugeneang.jpg',
    name: 'Eugene Ang',
    description: "Hi, I'm Eugene and i believe that caffeine is a miracle drug"
  },
  {
    foss: true,
    june: true,
    githubLink: 'https://github.com/Dhanvine321',
    inLink: 'https://linkedin.com/in/dhanvine-rameshkumar',
    imageSrc: '/teams/ppl/dhanvine.jpg',
    name: 'Dhanvine Rameshkumar',
    description: "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!"
  },
  {
    foss: true,
    githubLink: 'https://github.com/Elstuhn',
    inLink: 'https://linkedin.com/in/elstuhn',
    imageSrc: '/teams/ppl/elston.jpg',
    name: 'Elston Tan',
    description: "Hello, I'm Elston. I love learning and playing around with AI, my favourite game is Sekiro."
  },
  {
    foss: true,
    githubLink: 'https://github.com/fishjojo1',
    inLink: 'https://linkedin.com/in/fishjojo1',
    imageSrc: '/teams/ppl/joeytang.jpeg',
    name: 'Joey Tang',
    description: ""
  },
  {
    foss: true,
    june: true,
    sep: true,
    githubLink: 'https://github.com/Haloen',
    inLink: 'https://linkedin.com/in/yuan-xi-yap-5b3205242',
    imageSrc: '/teams/ppl/yuanxi.jpg',
    name: 'Yap Yuan Xi',
    description: "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development."
  },
  {
    foss: true,
    june: true,
    githubLink: 'https://github.com/electron13',
    inLink: 'https://linkedin.com/in/ashwin-l-82968a202',
    imageSrc: '/teams/ppl/ashwin.jpg',
    name: 'Ashwin Lokesh',
    description: "I am Ashwin."
  },
  {
    foss: true,
    githubLink: 'https://github.com/ka-bear',
    imageSrc: '/teams/ppl/kabir.png',
    name: 'Kabir Jain',
    description: "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI."
  },
  {
    foss: true,
    june: true,
    githubLink: 'https://github.com/RottenLemons',
    inLink: 'https://linkedin.com/in/mahir-shah-681aa0261',
    imageSrc: '/teams/ppl/mahir.png',
    name: 'Mahir Shah',
    description: "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes."
  },
  {
    foss: true,
    june: true,
    githubLink: 'https://github.com/jedlimlx',
    imageSrc: '/teams/ppl/jed.png',
    name: 'Jed Lim',
    description: "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    june: true,
    githubLink: 'https://github.com/Dragonslayer262',
    inLink: 'https://linkedin.com/in/james-tan-dejun',
    imageSrc: '/teams/ppl/james_tan.png',
    name: 'James Tan Dejun',
    description: "I'm a JC2 student in RVHS. I mainly enjoy doing competitive programming and machine learning."
  },
  {
    june: true,
    githubLink: 'https://github.com/edwinlmy5',
    imageSrc: '/teams/ppl/edwin_liew.jpg',
    name: 'Edwin Liew',
    description: "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    june: true,
    githubLink: 'https://github.com/Zernier',
    imageSrc: '/teams/ppl/wayne_ang.jpg',
    name: 'Wayne Ang',
    description: "I am a JC2 from ACJC currently. I like reading books, listening to new music and playing the guitar."
  },
  {
    june: true,
    githubLink: 'https://github.com/idkSeth',
    inLink: 'https://linkedin.com/in/seth-yong-00672b229',
    imageSrc: '/teams/ppl/seth.jpeg',
    name: 'Seth Olav Yong',
    description: "Hi, I'm Seth, a Poly 2 student from SP."
  },
  {
    june: true,
    sep: true,
    githubLink: 'https://github.com/TwelvePenguins',
    inLink: 'https://linkedin.com/in/yuhan-du-12p3ngu5',
    imageSrc: '/teams/ppl/duyuhan.jpeg',
    name: 'Du Yuhan',
    description: "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer."
  },
  {
    june: true,
    githubLink: 'https://github.com/fwyr',
    imageSrc: '/teams/ppl/maweiyi.jpeg',
    name: 'Ma Weiyi',
    description: "Hello! I'm Weiyi, a DHS student who just happens to like computers."
  },
  {
    june: true,
    sep: true,
    githubLink: 'https://github.com/sawzedong',
    inLink: 'https://linkedin.com/in/ze-dong-saw-9b3936242',
    webLink: 'https://sawzedong.github.io/portfolio/',
    imageSrc: '/teams/ppl/sawzedong.jpeg',
    name: 'Saw Ze Dong',
    description: "Hi, i'm a JC1 student from Dunman High, interested in programming websites, trying out AI and more"
  },
  {
    june: true,
    sep: true,
    githubLink: 'https://github.com/Harry-cheong',
    inLink: 'https://linkedin.com/in/harry-cheong-72bbb5212',
    imageSrc: '/teams/ppl/harry.jpg',
    name: 'Cheong Jun Kai Harry',
    description: "I'm Harry. I love tinkering with tech. I love card throwing."
  },
  {
    june: true,
    sep: true,
    githubLink: 'https://github.com/squi-ddy',
    webLink: 'https://squiddy.me/',
    imageSrc: '/teams/ppl/wenkai.jpg',
    name: 'Liu Wenkai',
    description: "Hi, I'm Wenkai, a JC1 student from NUSH."
  },
  {
    june: true,
    sep: true,
    githubLink: 'https://github.com/cakular',
    imageSrc: '/teams/ppl/hugo.jpg',
    name: 'Hugo Maximus Lim',
    description: "Hi, I'm Hugo, a JC1 student from NUSH."
  },
  {
    sep: true,
    githubLink: 'https://github.com/ozk100',
    imageSrc: '/teams/ppl/oon_zheng_kang.jpg',
    name: 'Oon Zheng Kang',
    description: "Hi, I'm Zheng Kang, a JC1 student from DHS."
  },
  {
    sep: true,
    githubLink: 'https://github.com/Giganaer',
    imageSrc: '/teams/ppl/chee_justin.jpg',
    name: 'Chee Justin Suwattana',
    description: "Hi I'm Justin, a JC1 computing student in DHS who also likes playing guitar"
  },
  {
    sep: true,
    githubLink: 'https://github.com/cytronicoder',
    inLink: 'https://linkedin.com/in/cytronicoder',
    webLink: 'https://www.cytronicoder.com/',
    imageSrc: '/teams/ppl/peter.jpeg',
    name: 'Zeyu Yao (Peter)',
    description: "I'm a student developer currently studying in Singapore."
  },
  {
    sep: true,
    githubLink: 'https://github.com/Armweak5104',
    imageSrc: '/teams/ppl/neil.png',
    name: 'Neil Bhandari',
    description: "I will be in JC1 in 2023. I code mainly in python and C++. I also fail captcha tests too much."
  },
  {
    sep: true,
    githubLink: 'https://github.com/cervonwong',
    inLink: 'https://linkedin.com/in/cervonwong',
    webLink: 'https://cervonwong.com/',
    imageSrc: '/teams/ppl/cervon.jpg',
    name: 'Cervon Wong',
    description: "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎"
  },
  {
    sep: true,
    githubLink: 'https://github.com/jeffilluminati',
    imageSrc: '/teams/ppl/mayukh.jpg',
    name: 'Mayukh Das',
    description: ""
  },
  {
    sep: true,
    githubLink: 'https://github.com/BenTan101',
    inLink: 'https://linkedin.com/in/lee-i-shiang',
    imageSrc: '/teams/ppl/lee_i-shiang.jpeg',
    name: 'Lee I-Shiang',
    description: "Hi, I'm I-Shiang :P I like coding, chemistry, and cheese."
  },
  {
    dec: true,
    githubLink: 'https://github.com/jeromepalayoor',
    inLink: 'https://linkedin.com/in/jeromepalayoor',
    webLink: 'https://jeromepalayoor.com/',
    imageSrc: '/teams/ppl/jerome_palayoor.png',
    name: 'Jerome Palayoor',
    description: "I love math and coding and recently picked up cyber security."
  },
];
</script>