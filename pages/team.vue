<template>
  <div class="bg-white dark:bg-slate-800">
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <div class="pt-16 sm:pt-32">
      <div class="relative isolate pt-14 lg:px-8">
        <PatchesYellow />
        <h1 class="pb-10 sm:pb-24 text-center">Our Team</h1>
        <main class="px-2">
          <!-- OIC Section -->
          <section>
            <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
              <PageHead title="Our OICs">
                BuildingBloCS {{ year }} is led by a set of <s>charismatic</s> passionate overall ICs who overlook various departments within the organisation. Having worked together on organising BuildingBloCS {{ year - 1 }} last year, the organisers aim to help make BuildingBloCS {{ year }} even bigger and more far-reaching than ever before.
              </PageHead>

              
            <TabGroup :defaultIndex="Object.keys(oics).indexOf(year.toString())">
              <TabList class="flex item-center rounded-xl w-96 justify-center mx-auto mb-8">
                <Tab v-for="(category, index) in Object.keys(oics)"
                  as="template" :key="category" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full text-medium leading-5 font-extrabold',
                      'focus:outline-none justify-center',
                      selected ? 'text-orange-700 dark:text-orange-300' :
                      'text-orange-600 dark:text-orange-100 text-opacity-40 hover:text-orange-300 hover:text-opacity-70',
                      index == 0 ? 'rounded-l-xl' : index == Object.keys(oics).length-1 ? 'rounded-r-xl' : '',
                    ]">
                    {{ category }}
                  </button>
                </Tab>
              </TabList>
              <TabPanels class="mt-2">
                <TabPanel v-for="[year, oic] in Object.entries(oics)" :key="year.toString()" v-slot="{ selected }" class="p-3 focus:outline-none">
                  <div class="flex flex-wrap justify-center">
                    <TeamCard class="m-2" v-for="(teamMember, index) in oic" :key="index" :teamMember="teamMember"></TeamCard>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>


            </div>
          </section>

          <div class="pt-24 pb-8 justify-center">
            <TabGroup :defaultIndex="nearestMonthIndex">
              <TabList class="flex item-center rounded-xl bg-orange-200 w-96 justify-center mx-auto mb-8">
                <Tab v-for="(category, index) in sections"
                  as="template" :key="category" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full py-2.5 font-extrabold text-medium leading-5 text-orange-700',
                      'focus:outline-none justify-center',
                      selected ? 'bg-orange-300' : 'hover:bg-orange-200',
                      index == 0 ? 'rounded-l-xl' : index == sections.length-1 ? 'rounded-r-xl' : '',
                    ]">
                    {{ category }}
                  </button>
                </Tab>
              </TabList>

              <TabPanels class="mt-2">
                <TabPanel v-for="(membersList, index) in teamMembers" :key="index" v-slot="{ selected }" class="p-3 focus:outline-none">
                  <TeamExco v-if="membersList.exco" :members="membersList.exco" />
                    
                  <section>
                    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                      <PageHead title="Our Organisers">
                        Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!
                      </PageHead>
                      <TeamSubcomm v-for="[name, members] in Object.entries(membersList.organisers)" :name="name" :members="members" :key="name" />
                    </div>
                  </section>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
          <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="text-700 text-center">
                <div class="text-900 font-bold text-5xl mb-3 text-gray-900 dark:text-white">Join Our Team</div>
                <div class="text-700 text-2xl mb-5 text-gray-600 dark:text-gray-400">Be a part of a team of organisers seeking to make an impact!</div>
                <div class="align-center text-center justify-center flex">
                  <NuxtLink href="https://go.buildingblocs.sg/orgsignup24"
                    class="font-bold px-5 py-3 rounded-3xl w-28 bg-orange-400 hover:bg-orange-500 text-white flex justify-center items-center">
                    <!-- <IconsDiscord /><span class="ml-2">Join Now</span> -->
                    Sign Up!
                  </NuxtLink>
                </div>
            </div>
        </div>
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import database from '~/assets/organisers.json'


useSeoMeta({
  title: 'Our Team - BuildingBloCS',
  description: 'Ignite your passion in computing',
  ogTitle: 'Our Team - BuildingBloCS',
  ogDescription: 'Ignite your passion in computing',
  ogImage: '/index/hero/img3png.webp',
  ogUrl: 'https://buildingblocs.sg/team',
  twitterTitle: 'Our Team - BuildingBloCS',
  twitterDescription: 'Ignite your passion in computing',
  twitterImage: '/index/hero/img3png.webp',
  twitterCard: 'summary_large_image'
})

const sections = ["Mar '24", "Jun '24", "Sep '24", "Dec '24"];

const year = (new Date()).getFullYear();

const nearestMonthIndex = sections.findIndex((month) => {
  const monthDate = new Date(`${month} ${year}`);
  return monthDate > new Date();
});

const oics = {
  2024: ["duhan", "justinchee", "mahir"].map(it => database[it]),
  2023: ["oneytlam", "yauleqi", "prannay"].map(it => database[it])
}


const teamMembers = [
  { // March
    organisers: {
      "Human Resources": [
        {name: "vinita", lead: true}, {name: "eugene", lead: true}, {name: "jinen", lead: true}, {name: "kabir"}, {name: "johnson"}, {name: "raghavsriram"},
        {name: "junhan"}, {name: "elston"}, {name: "dhanvine"}, {name: "matthiaskoh"}, {name: "saamiya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "ashley", lead: true}, {name: "neil", lead: true}, {name: "mahit"}, {name: "tpsean"}, {name: "claralee"},
        {name: "jeffrey"}, {name: "kabir"}, {name: "hugo"}, {name: "tongyu"}, {name: "shivani"}, {name: "vijay"},
        {name: "matthias"}, {name: "seelun"}, {name: "kashvi"}, {name: "jack"}, {name: "sindya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Adshop": [
        {name: "dhanvine", lead: true}, {name: "ozk", lead: true}, {name: "weiyi", lead: true}, {name: "harry"}, {name: "zinedine"},
        {name: "sindya"},{name: "lucius"}, {name: "kaiwen"}, {name: "ayden"}, {name: "sai"}, {name: "cayden"}, {name: "sahil"},
        {name: "asha"}, {name: "edwinkoon"}, {name: "nikita"}, {name: "alyssa"}, {name: "raghavkumar"}, {name: "alexis"}, {name: "shengxin"}, {name: "kairos"},
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity": [
        {name: "minjia", lead: true}, {name: "lehan", lead: true},
        {name: "sophiachua"}, {name: "angelina"}, {name: "trisha"}, {name: "julyan"}, {name: "peter"}, {name: "myat"}, {name: "claraong"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Development": [
        {name: "myat", lead: true}, {name: "jeffrey"}, {name: "wenkai"},
        {name: "jerome"}, {name: "yueheng"}, {name: "minghong"}, {name: "dylan"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Outreach": [
        {name: "zedong", lead: true}, {name: "nikita", lead: true},{name: "myat"}, {name: "angelina"}, {name: "kashvi"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        "shivani", "shengxin", "lucius", "dhanvine", "eugene", "mahit", "sahil", "harry", "zedong", "weiyi"
      ].map(it => database[it])
    }
  },
  { // June
    // exco: ["kaiwen", "zayan", "duhan", "jinen", "suraj", "bryant", "renoir", "seth", "yuanxi"].map(it => database[it]),
    /*
    organisers: {
      // "Emcees": ["zayan", "mahit", "dhanvine"].map(it => database[it]),
      "Human Resources": [
        {name: "vinita", lead: true}, {name: "eugene", lead: true}, {name: "jinen", lead: true}, {name: "kabir"}, {name: "johnson"}, {name: "raghavsriram"},
        {name: "junhan"}, {name: "elston"}, {name: "dhanvine"}, {name: "matthiaskoh"}, {name: "saamiya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "ashley", lead: true}, {name: "neil", lead: true}, {name: "mahit"}, {name: "tpsean"}, {name: "claralee"},
        {name: "jeffrey"}, {name: "kabir"}, {name: "hugo"}, {name: "tongyu"}, {name: "shivani"}, {name: "vijay"},
        {name: "matthias"}, {name: "seelun"}, {name: "kashvi"}, {name: "jack"}, {name: "sindya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Adshop": [
        {name: "dhanvine", lead: true}, {name: "ozk", lead: true}, {name: "weiyi", lead: true}, {name: "harry"}, {name: "zinedine"},
        {name: "sindya"},{name: "lucius"}, {name: "kaiwen"}, {name: "ayden"}, {name: "sai"}, {name: "cayden"}, {name: "sahil"},
        {name: "asha"}, {name: "edwinkoon"}, {name: "nikita"}, {name: "alyssa"}, {name: "raghavkumar"}, {name: "alexis"}, {name: "shengxin"}, {name: "kairos"},
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity": [
        {name: "minjia", lead: true}, {name: "lehan", lead: true},
        {name: "sophiachua"}, {name: "angelina"}, {name: "trisha"}, {name: "julyan"}, {name: "peter"}, {name: "myat"}, {name: "claraong"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Development": [
        {name: "myat", lead: true}, {name: "jeffrey"}, {name: "wenkai"},
        {name: "shivreshi"}, {name: "jerome"}, {name: "yueheng"}, {name: "minghong"}, {name: "dylan"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Outreach": [
        {name: "zedong", lead: true}, {name: "nikita", lead: true},{name: "myat"}, {name: "angelina"}, {name: "kashvi"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        // TBC
      ].map(it => database[it])
    }
    */
  },
  { // September
    // exco: ["duhan", "mahir", "justinchee", "kaiwen", "wenkai", "minjia", "zedong"].map(it => database[it]),
    /*
    organisers: {
      "Human Resources": [
        {name: "vinita", lead: true}, {name: "eugene", lead: true}, {name: "jinen", lead: true}, {name: "kabir"}, {name: "johnson"}, {name: "raghavsriram"},
        {name: "junhan"}, {name: "elston"}, {name: "dhanvine"}, {name: "matthiaskoh"}, {name: "saamiya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "ashley", lead: true}, {name: "neil", lead: true}, {name: "mahit"}, {name: "tpsean"}, {name: "claralee"},
        {name: "jeffrey"}, {name: "kabir"}, {name: "hugo"}, {name: "tongyu"}, {name: "shivani"}, {name: "vijay"},
        {name: "matthias"}, {name: "seelun"}, {name: "kashvi"}, {name: "jack"}, {name: "sindya"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Adshop": [
        {name: "dhanvine", lead: true}, {name: "ozk", lead: true}, {name: "weiyi", lead: true}, {name: "harry"}, {name: "zinedine"},
        {name: "sindya"},{name: "lucius"}, {name: "kaiwen"}, {name: "ayden"}, {name: "sai"}, {name: "cayden"}, {name: "sahil"},
        {name: "asha"}, {name: "edwinkoon"}, {name: "nikita"}, {name: "alyssa"}, {name: "raghavkumar"}, {name: "alexis"}, {name: "shengxin"}, {name: "kairos"},
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity": [
        {name: "minjia", lead: true}, {name: "lehan", lead: true},
        {name: "sophiachua"}, {name: "angelina"}, {name: "trisha"}, {name: "julyan"}, {name: "peter"}, {name: "myat"}, {name: "claraong"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Development": [
        {name: "myat", lead: true}, {name: "jeffrey"}, {name: "wenkai"},
        {name: "shivreshi"}, {name: "jerome"}, {name: "yueheng"}, {name: "minghong"}, {name: "dylan"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Outreach": [
        {name: "zedong", lead: true}, {name: "nikita", lead: true},{name: "myat"}, {name: "angelina"}, {name: "kashvi"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        // TBC
      ].map(it => database[it])
    }
    */
  },
  { // December
    // exco: ["yuanxi", "zerui", "kashvi", "asha"].map(it => database[it]),
    /*
    organisers: {
      "Challenge Setters": ["yuanxi", "zerui", "junheng", "christian", "jerome", "justinlim"].map(it => database[it]),
      "Infrastructure and Platform": ["vincent", "zerui"].map(it => database[it]),
      "Publicity and Relations": ["kashvi", "asha"].map(it => database[it])
    }
    */
  }
]



</script>