<template>
  <div class="bg-white dark:bg-slate-800">
    <Nav />
    <div class="pt-16 sm:pt-32">
      <div class="relative isolate pt-14 lg:px-8">
        <PatchesYellow />
        
        <PageTitle text="Our Team" />

        <div class="px-2">
          <!-- OIC Section -->
          <section>
            <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
              <PageHead title="Our OICs">
                BuildingBloCS {{ year }} is led by a set of <s>charismatic</s> passionate overall ICs who overlook various departments within the organisation. Having worked together on organising BuildingBloCS {{ year - 1 }} last year, the organisers aim to help make BuildingBloCS {{ year }} even bigger and more far-reaching than ever before.
              </PageHead>

              
            <TabGroup :defaultIndex="Object.keys(oics).indexOf(year)">
              <TabList class="flex item-center rounded-xl w-96 justify-center mx-auto mb-8">
                <Tab v-for="(category, index) in Object.keys(oics)"
                  as="template" :key="category" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full text-medium leading-5 font-extrabold',
                      'focus:outline-none justify-center',
                      selected ? 'text-orange-300' : 'text-orange-100 text-opacity-40 hover:text-orange-300 hover:text-opacity-70',
                      index == 0 ? 'rounded-l-xl' : index == Object.keys(oics).length-1 ? 'rounded-r-xl' : '',
                    ]">
                    {{ category }}
                  </button>
                </Tab>
              </TabList>
              <TabPanels class="mt-2">
                <TabPanel v-for="[year, oic] in Object.entries(oics)" :key="year" v-slot="{ selected }" class="p-3 focus:outline-none">
                  <div class="flex flex-wrap justify-center">
                    <TeamCard class="m-2" v-for="(teamMember, index) in oic" :key="index" :teamMember="teamMember"></TeamCard>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>


            </div>
          </section>

          <div class="pt-24 pb-8 justify-center">
            <TabGroup :defaultIndex="2">
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
        </div>
        <Footer />
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

const sections = ["Mar '23", "Jun '23", "Sep '23", "Dec '23"];

const year = (new Date()).getFullYear();

const oics = {
  2023: ["oneytlam", "yauleqi", "prannay"].map(it => database[it]),
  2024: ["duhan", "justinchee", "mahir"].map(it => database[it])
}


const teamMembers = [
  { // March
    organisers: {
      "Human Resources": [
        {name: "suraj", lead: true}, {name: "isaackok", lead: true}, {name: "ozk"}, {name: "eugene"}, {name: "dhanvine"}, {name: "tsk"}, {name: "vinita"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "bryant", lead: true}, {name: "neil"}, {name: "shawn"}, {name: "jamestan"}, {name: "justinwang"}, 
        {name: "sahana"}, {name: "cervon"}, {name: "vishal"}, {name: "yuanxi"}, {name: "junee"}, 
        {name: "edwinliew"}, {name: "arthur"}, {name: "kimwee"}
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
      "Team Starvation": [
        {name: "seth", lead: true}, {name: "wenkai", lead: true}, {name: "yuanxi", lead: true},
        {name: "kabir"}, {name: "mahir"}, {name: "jed"}, {name: "ishneet"}, {name: "zerui"}, {name: "weiyi"},
        {name: "zedong"}, {name: "harry"}, {name: "danielchua"}, {name: "jinghong"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        "kaiwen", "zayan", "jinghong", "ian", "ishneet"
      ].map(it => database[it])
    }
  },
  { // June
    exco: ["kaiwen", "zayan", "duhan", "jinen", "suraj", "bryant", "renoir", "seth", "yuanxi"].map(it => database[it]),
    organisers: {
      "Emcees": ["zayan", "mahit", "dhanvine"].map(it => database[it]),
      "Human Resources": [
        {name: "suraj", lead: true}, {name: "isaackok", lead: true}, {name: "ozk"}, {name: "eugene"}, {name: "dhanvine"}, {name: "tsk"}, {name: "vinita"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "bryant", lead: true}, {name: "neil"}, {name: "shawn"}, {name: "jamestan"}, {name: "justinwang"}, 
        {name: "sahana"}, {name: "hnin"}, {name: "junee"}, 
        {name: "edwinliew"}, {name: "arthur"}, {name: "mahit"}, {name: "kimwee"}, {name: "xiyuan"}, {name: "hugo"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Admin": [
        {name: "kaiwen", lead: true}, {name: "zayan", lead: true}, {name: "jinen", lead: true}, {name: "duhan", lead: true},
        {name: "jiaxuan"}, {name: "leducminh"}, {name: "jack"}, {name: "asha"}, {name: "ashley"}, {name: "kashvi"}, {name: "justinchee"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity & Design": [
        {name: "minjia", lead: true}, {name: "renoir", lead: true},
        {name: "edwinliew"}, {name: "wayne"}, {name: "claralee"}, {name: "andrel"}, {name: "celine"},
        {name: "lehan"}, {name: "sophiachua"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Hackathon": [
        {name: "kabir", lead: true}, {name: "mahir", lead: true},
        {name: "ashwin"}, {name: "jed"}, {name: "ishneet"}, {name: "pann"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Development": [
        {name: "seth", lead: true}, {name: "jerome"}, {name: "danielchua"}, {name: "peter"},
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
        {name: "eugene", lead: true}, {name: "vinita", lead: true}, 
        {name: "johnson"}, {name: "junhan"}, {name: "elston"}, {name: "saamiya"},
        {name: "dhanvine"}, {name: "raghavsriram"}, {name: "kabir"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Quality Assurance": [
        {name: "neil", lead: true}, {name: "ashley", lead: true}, 
        {name: "tpsean"}, {name: "claralee"}, {name: "matthias"},
        {name: "weiyi"}, {name: "hugo"}, {name: "kabir"}, {name: "tongyu"},
        {name: "jack"}, {name: "kashvi"}, {name: "shivani"}, {name: "vijay"}, 
        {name: "jeffrey"}, {name: "seelun"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Admin": [
        {name: "justinchee", lead: true}, {name: "duhan", lead: true}, {name: "kaiwen", lead: true}, {name: "zedong", lead: true},
        {name: "nikita"}, {name: "shengxin"}, {name: "cayden"},
        {name: "harry"}, {name: "ozk"}, {name: "kairos"}, {name: "alexis"}, 
        {name: "ayden"}, {name: "edwinkoon"}, {name: "raghavkumar"}, {name: "sai"},
        {name: "lucius"}, {name: "dhanvine"}, {name: "alyssa"}, {name: "weiyi"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Publicity & Design": [
        {name: "minjia", lead: true}, {name: "lehan", lead: true},
        // {name: "julyan"}, {name: "trisha"},
        {name: "myat"}, {name: "sophiachua"},
        // {name: "claraong"}, {name: "angelina"},
        {name: "peter"}, {name: "asha"}
      ].map(it => ({...(database[it.name]), lead: it.lead || false})),
      "Workshop Speakers": [
        "duhan", "cervon", "justinchee", "zedong", "ozk", "harry", "wenkai", "bobby", "mayukh", "myat", "sai", "raghavkumar",
        "mahir", "hugo", "yuanxi", "kabir", "neil"
      ].map(it => database[it])
    }
  },
  { // December
    // exco: ["yuanxi", "zerui", "kashvi", "asha"].map(it => database[it]),
    organisers: {
      "Challenge Setters": ["yuanxi", "zerui", "junheng", "christian", "jerome", "justinlim"].map(it => database[it]),
      "Infrastructure and Platform": ["vincent", "zerui"].map(it => database[it]),
      "Publicity and Relations": ["kashvi", "asha"].map(it => database[it])
    }
  }
]



</script>