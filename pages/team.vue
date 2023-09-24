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
                          <TeamCard class="m-2" v-for="(teamMember, index) in teamMembersOic" :key="index" :teamMember="teamMember"></TeamCard>
                        </div>
                    </div>
                  </section>
                  <div class="pt-24 pb-8 justify-center">
                  <TabGroup :defaultIndex="1">
                    <TabList class="flex space-x-1 rounded-xl bg-orange-200 p-1 w-96 justify-center">
                      <Tab
                        v-for="category in ['Jun', 'Sep', 'Dec']"
                        as="template"
                        :key="category"
                        v-slot="{ selected }"
                      >
                        <button
                          :class="[
                            'w-full rounded-lg py-2.5 font-extrabold text-xl leading-5 text-orange-700',
                            'ring-opacity-0 focus:outline-none justify-center',
                            selected
                              ? 'bg-orange-300 shadow'
                              : 'hover:bg-orange-300',
                          ]"
                        >
                          {{ category }}
                        </button>
                      </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                      <TabPanel class="rounded-xl p-3 focus:outline-none">
                        <section class="pb-24">
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Executive Committee (Exco)</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.</p>
                            </div>
                            <div class="flex flex-wrap justify-center">
                              <TeamCard class="m-2" v-for="(teamMember, index) in teamMembers[0].exco" :key="index" :teamMember="teamMember"></TeamCard>
                            </div>
                          </div>
                        </section>
                        
                        <section>
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Organisers</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!</p>
                            </div>
                            <div v-for="[name, members] in Object.entries(teamMembers[0].organisers)" :key="name">
                              <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">{{ name }}</h2>
                              <div class="flex flex-wrap justify-center">
                                <TeamCard class="m-2" v-for="(teamMember, index) in members" :key="index" :teamMember="teamMember"></TeamCard>
                              </div>
                            </div>
                          </div>
                        </section>
                      </TabPanel>




                      <TabPanel class="rounded-xl p-3 focus:outline-none">
                        <section class="pb-24">
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Executive Committee (Exco)</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.</p>
                            </div>
                            <div class="flex flex-wrap justify-center">
                              <TeamCard class="m-2" v-for="(teamMember, index) in teamMembers[1].exco" :key="index" :teamMember="teamMember"></TeamCard>
                            </div>
                          </div>
                        </section>
                        
                        <section>
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Organisers</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!</p>
                            </div>
                            <div v-for="[name, members] in Object.entries(teamMembers[1].organisers)" :key="name">
                              <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">{{ name }}</h2>
                              <div class="flex flex-wrap justify-center">
                                <TeamCard class="m-2" v-for="(teamMember, index) in members" :key="index" :teamMember="teamMember"></TeamCard>
                              </div>
                            </div>
                          </div>
                        </section>
                      </TabPanel>




                      <TabPanel class="rounded-xl p-3 focus:outline-none">
                        <section class="pb-24">
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Executive Committee (Exco)</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.</p>
                            </div>
                            <div class="flex flex-wrap justify-center">
                              <TeamCard class="m-2" v-for="(teamMember, index) in teamMembers[2].exco" :key="index" :teamMember="teamMember"></TeamCard>
                            </div>
                          </div>
                        </section>
                        
                        <section>
                          <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                            <div class="mx-auto mb-8 max-w-screen-xl lg:mb-8">
                              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl text-left">Our Organisers</h2>
                              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400 text-left">Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!</p>
                            </div>
                            <div v-for="[name, members] in Object.entries(teamMembers[2].organisers)" :key="name">
                              <h2 class="text-3xl pt-16 tracking-tight text-left font-extrabold pb-8 text-gray-900 dark:text-white">{{ name }}</h2>
                              <div class="flex flex-wrap justify-center">
                                <TeamCard class="m-2" v-for="(teamMember, index) in members" :key="index" :teamMember="teamMember"></TeamCard>
                              </div>
                            </div>
                          </div>
                        </section>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                  </div>
                </div>
                <Footer />
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import database from '~/assets/organisers.json'


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


const teamMembers = [
  { // June
    exco: ["kaiwen", "zayan", "duhan", "jinen", "suraj", "bryant", "renoir", "seth", "yuanxi"].map(it => database[it]),
    organisers: {
      "Emcees": ["zayan", "mahit", "dhanvine"].map(it => database[it]),
      "Human Resources": [
        {name: "suraj", lead: true}, {name: "isaackok", lead: true}, {name: "ozk"}, {name: "eugene"}, {name: "dhanvine"}, {name: "tsk"}, {name: "vinita"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "bryant", lead: true}, {name: "neil"}, {name: "shawn"}, {name: "jamestan"}, {name: "justinwang"}, 
        {name: "sahana"}, {name: "cervon"}, {name: "vishal"}, {name: "yuanxi"}, {name: "hnin"}, {name: "junee"}, 
        {name: "edwinliew"}, {name: "arthur"}, {name: "mahit"}, {name: "kimwee"}, {name: "xiyuan"}, {name: "hugo"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Admin": [
        {name: "kaiwen", lead: true}, {name: "zayan", lead: true}, {name: "jinen", lead: true}, {name: "duhan", lead: true},
        {name: "jiaxuan"}, {name: "leducminh"}, {name: "jack"}, {name: "asha"}, {name: "ashley"}, {name: "kashvi"},
        {name: "mahamantra"}, {name: "justinchee"}, {name: "ghayathri"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity & Design": [
        {name: "minjia", lead: true}, {name: "renoir", lead: true},
        {name: "edwinliew"}, {name: "wayne"}, {name: "cervon"}, {name: "claralee"}, {name: "andrel"}, {name: "celine"},
        {name: "lehan"}, {name: "sophiachua"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Hackathon": [
        {name: "kabir", lead: true}, {name: "mahir", lead: true},
        {name: "ashwin"}, {name: "jed"}, {name: "ishneet"}, {name: "pann"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Development": [
        {name: "seth", lead: true}, {name: "wenkai", lead: true}, {name: "yuanxi", lead: true},
        {name: "kabir"}, {name: "mahir"}, {name: "jed"}, {name: "ishneet"}, {name: "zerui"}, {name: "weiyi"},
        {name: "zedong"}, {name: "harry"}, {name: "jerome"}, {name: "danielchua"}, {name: "peter"}, 
        {name: "raymond"}, {name: "jinghong"}, {name: "rajharsh"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        "jamestan", "wayne", "edwinliew", "duhan", "dhanvine", "eugene", "kaiwen", "jinghong", "zayan", "jed", "seth", "ashwin", "weiyi", "zedong", "harry", "yuanxi", "mahir", "hugo", "wenkai", "ishneet"
      ].map(it => database[it])
    }
  },
  { // September
    exco: ["duhan", "mahir", "justinchee", "kaiwen", "wenkai", "minjia", "zedong"].map(it => database[it]),
    organisers: {
      "Human Resources": [
        {name: "eugene", lead: true}, {name: "vinita", lead: true}, {name: "ozk"}, {name: "dhanvine"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "neil", lead: true}, {name: "ashley", lead: true}, {name: "junee"}, {name: "hugo"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        "duhan", "cervon", "justinchee", "zedong", "ozk", "harry", "wenkai", "bobby", "mayukh", // "myat", "sai", "raghav", 
        "mahir", "hugo", "yuanxi", "kabir", "neil"
      ].map(it => database[it])
    }
  },
  { // December
    exco: ["yuanxi", "zerui", "kashvi", "asha"].map(it => database[it]),
    organisers: {
      "Challenge Setters": ["yuanxi", "zerui", "junheng", "christian", "jerome", "justinlim"].map(it => database[it]),
      "Infrastructure and Platform": ["vincent", "zerui"].map(it => database[it]),
      "Publicity and Relations": ["kashvi", "asha"].map(it => database[it])
    }
  }
]

const teamMembersOic = ["oneytlam", "yauleqi", "prannay"].map(it => database[it]);



</script>