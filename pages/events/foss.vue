<template>
    <div class="bg-white dark:bg-slate-800">
      <div>
        <Nav />
        <div class="pt-16 sm:pt-32">
          <div class="relative isolate pt-14 lg:px-8">
            <PatchesLarger />
            <div
              class="mx-auto lg:max-w-7xl lg:flex justify-center max-w-lg px-8 sm:px-0"
            >
              <div class="text-left sm:pb-8 max-w-xl">
                <nuxt-img
                    format="webp"
                    class="align-center justify-center w-96 mx-auto"
                    src="/foss/logo.png"
                    />
                <h1
                  class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
                >
                  FOSSASIA Summit
                </h1>
                <h2
                  class="text-3xl mt-6 font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  Key Details
                </h2>
                <p
                  class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300"
                >
                  <b>Exhibition Dates</b>: Thursday, 13 April, 8:30 AM - Saturday, 15 April, 6 PM <br/>
                  <b>Talk/Workshop Dates</b>: Friday, 14 April, 6.30 PM - 9.45 PM <br/>
                  Venue: Online and in-person at Lifelong Learning Institute <br/>
                  More information: 
                  <NuxtLink href="https://events.fossasia.org/" class="text-orange-500 dark:text-orange-400 hover:underline">events.fossasia.org</NuxtLink>
                </p>
  
                <p
                  class="mt-3 text-lg leading-8 text-gray-600 dark:text-slate-300 pb-4 sm:pb-12"
                >
                The FOSSASIA Summit 2023 is a hybrid event conducted both online and in-person, 
                part of a series of FOSSASIA events held since 2009. Participate to connect with 
                businesses, developers, and tech communities from around the world and learn about 
                the latest developments in open source! BuildingBloCS is proud to be partnering 
                FOSSASIA to present several workshops and talks, as well as our very own exhibition 
                booth at the FOSSASIA Summit 2023.
                </p>
  
                <h2
                  class="text-3xl mt-3 font-semibold tracking-tight text-gray-900 dark:text-white mb-8"
                >
                  Photo Gallery
                </h2>
                <div class="">
                  <Swiper
                    :modules="[
                      SwiperAutoplay,
                      SwiperPagination,
                      SwiperNavigation,
                    ]"
                      :pagination="{
                        clickable: true,
                      }"
                    :navigation="true"
                    :centeredSlides="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    class="h-96 rounded-2xl"
                  >
                    <SwiperSlide v-for="slide in images" :key="slide">
                      <nuxt-img
                        format="webp"
                        class="object-cover h-96 w-full absolute top-0"
                        :src="slide"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div class="mx-1 md:mx-7">
                <div class="mx-1 md:mx-7 max-w-lg">
                  <div class="mx-1 md:mx-7 max-w-lg">
                    <h2
                      class="text-3xl font-bold my-4 text-gray-900 sm:text-4xl dark:text-white"
                    >
                      Workshops
                    </h2>
  
                    <TabGroup :defaultIndex="0">
                      <TabList
                        class="flex item-center justify-center mx-auto mb-4 mt-8"
                      >
                        <Tab
                          v-for="(category, index) in events.map(
                            (it) => it.location,
                          )"
                          as="template"
                          :key="category"
                          v-slot="{ selected }"
                        >
                          <button
                            :class="[
                              'w-full text-sm leading-5 font-bold',
                              'focus:outline-none justify-center',
                              selected
                                ? 'text-orange-700 dark:text-orange-300'
                                : 'text-orange-600 dark:text-orange-100 text-opacity-40 hover:text-orange-300 hover:text-opacity-70',
                            ]"
                          >
                            {{ category }}
                          </button>
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel
                          v-for="(timeline, index) in events"
                          :key="index"
                          v-slot="{ selected }"
                          class="p-3 focus:outline-none"
                        >
                            <!-- <h3
                              class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white mb-4"
                            >
                              {{ timeline.date }}
                            </h3> -->
                            <ol
                              class="relative border-l border-gray-200 dark:border-gray-700 mb-10"
                            >
                              <li
                                v-for="event in timeline.events"
                                :key="event.title"
                                class="mb-10 ml-4"
                              >
                                <div
                                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-600"
                                ></div>
                                <time
                                    class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{{
                                        event.date }}</time>
                                <h3
                                  class="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl dark:text-white"
                                >
                                  {{ event.title }}
                                </h3>
                                <div class="flex items-center">
                                  <p
                                    class="sm:text-md text-md grow text-gray-500 dark:text-slate-400"
                                  >
                                    <i>{{ event.author }}</i>
                                  </p>
                                  <NuxtLink v-if="event.youtube"
                                    :href="event.youtube"
                                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-4"
                                  >
                                    <IconsYoutube />
                                  </NuxtLink>
  
                                </div>
                                
  
                                <nuxt-img
                                  format="webp"
                                  v-if="event.image"
                                  :src="event.image"
                                  alt=""
                                  class="object-cover object-center w-full max-h-[25rem] lg:max-h-full rounded-xl shadow-xl ring-1 ring-gray-400/10 my-2"
                                />
                              </li>
                            </ol>
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>
                </div>
              </div>
            </div>
            <EventsCta />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  } from "@headlessui/vue";
  
  const images = [
    "/foss/gallery/img1.webp",
    "/foss/gallery/img2.webp",
    "/foss/gallery/img3.webp",
    "/foss/gallery/img4.webp",
    "/foss/gallery/img5.webp",
    "/foss/gallery/img6.webp",
    "/foss/gallery/img7.webp",
    "/foss/gallery/img8.webp",
    "/foss/gallery/img9.webp",
  ];
  
  
  const events = [
    {
      location: "Event Hall 2-2",
      events: [
            {
              date: "6.30pm-8.30pm", 
              title: "Data Analysis and Visualization with Python",
              author: "by Dhanvine Rameshkumar and Eugene Ang (TJC)",
              image: "/foss/data.webp",
            },
            {
              date: "8.45pm-9.15pm",
              title: "Steganographic Malware Embedding in AI Models",
              author: "by Joey Tang (HCI)",
              image: "/foss/joey.webp",
            },
        ],
    },
    {
      location: "Training Room 2-1",
      events: [
            {
              date: "6.30pm-8.30pm", 
              title: "Artificial Intelligence in Astronomy and Physics",
              author: "by Yap Yuan Xi (NUSH) and Ashwin Lokesh (YIJC)",
              image: "/foss/astro.webp",
            },
            {
              date: "8.45pm-9.15pm",
              title: "Exploring the Forward-Forward Algorithm",
              author: "by Elston Tan (SP)",
            },
        ],
    },
    {
      location: "Training Room 2-2",
      events: [
            {
              date: "6.30pm-9.45pm", 
              title: "Unleashing the Power of Graph Neural Networks",
              author: "by Zayan Karimi, Jed Lim, Mahir Shah and Kabir Jain (NUSH)",
              image: "/foss/gnn.webp",
            },
        ],
    },
  ];
  
  useSeoMeta({
    title: "BBCS × FOSSASIA Summit - BuildingBloCS 2023",
    description: "Ignite your passion in computing",
    ogTitle: "BBCS × FOSSASIA Summit - BuildingBloCS 2023",
    ogDescription: "Ignite your passion in computing",
    ogImage: "/index/hero/img5.webp",
    ogUrl: "https://buildingblocs.sg/events/foss",
    twitterTitle: "BBCS × FOSSASIA Summit - BuildingBloCS 2023",
    twitterDescription: "Ignite your passion in computing",
    twitterImage: "/index/hero/img5.webp",
    twitterCard: "summary_large_image",
  });
  </script>
  
  <style>
  .swiper-button-prev {
    color: #eb9d39;
  }
  
  .swiper-button-next {
    color: #eb9d39;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #eb9d39;
  }
  </style>