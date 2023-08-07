<template>
  <div>
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <div>
      <div class="absolute w-full h-full z-10">

        <Head>
          <Title>BuildingBloCS 2023</Title>
        </Head>
        <IndexHero class="" />
        <div class="bg-white dark:bg-slate-800">
          <section id="statement" class="pt-20">
            <IndexStatement />
          </section>
          <IndexLtextRpic :title="LtextRpicTitle1" :desc="LtextRpicDesc1" :img="LtextRpicImg1" />
          <IndexRtextLpic :title="RtextLpicTitle1" :desc="RtextLpicDesc1" :img="RtextLpicImg1" />
          <IndexLtextRpic :title="LtextRpicTitle2" :desc="LtextRpicDesc2" :img="LtextRpicImg2" />
          <IndexRtextLpic :title="RtextLpicTitle2" :desc="RtextLpicDesc2" :img="RtextLpicImg2" />
        </div>
        <IndexTimeline />
        <IndexCta />
        <Footer />
      </div>
    </div>
    <!-- Swiper background -->
    <Swiper :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :effect="'creative'"
      :autoplay="{ delay: 8000, disableOnInteraction: false }" class="z-0">
      <SwiperSlide v-for="slide in slides" :key="slide">
        <div class="absolute top-0 left-0 w-full h-full fade from-transparent to-black"></div>
        <!-- Add "object-cover" class to stretch the image -->
        <nuxt-img format="webp" class="object-cover w-full h-full" :src="slide" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import IndexLtextRpic from '/components/index/LtextRpic.vue';
import IndexRtextLpic from '/components/index/RtextLpic.vue';

export default {
  components: {
    IndexLtextRpic,
    IndexRtextLpic,
  },
  data() {
    return {
      slides: [
        "/index/hero/img2.jpg",
        "/index/hero/img3.jpg",
        "/index/hero/img3.png",
        "/index/hero/img4.png",
        "/index/hero/img5.jpg",
        "/index/hero/img6.jpg",
      ],
      LtextRpicTitle1: 'By students, for students.',
      LtextRpicDesc1:
        'BuildingBloCS is the largest nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.',
      LtextRpicImg1: '/index/img1.png',
      RtextLpicTitle1: 'Multi-focused.',
      RtextLpicDesc1:
        "We touch base on various topics, like AI, Cybersecurity and Software Development, to varying levels of complexity. It's truly fun for everyone!",
      RtextLpicImg1: '/index/img4.png',
      LtextRpicTitle2: 'Passionate Speakers.',
      LtextRpicDesc2:
        "We give opportunities to various speakers to talk about their work and interests, and we don't shy away from getting into the nitty-gritty.",
      LtextRpicImg2: '/index/img3.jpg',
      RtextLpicTitle2: 'Events for everyone.',
      RtextLpicDesc2:
        "We host events for students from Secondary Schools, JCs, Polys and International Schools. All are welcome!",
      RtextLpicImg2: '/index/img2.jpg',
    };
  },
};
</script>

<script setup>
useSeoMeta({
  description: 'Ignite your passion in computing',
  ogTitle: 'BuildingBloCS 2023',
  ogDescription: 'Ignite your passion in computing',
  ogImage: '/index/hero/img2.jpg',
  ogUrl: 'https://new.buildingblocs.sg/',
  twitterTitle: 'BuildingBloCS 2023',
  twitterDescription: 'Ignite your passion in computing',
  twitterImage: '/index/hero/img2.jpg',
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

<style>
.swiper-slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* This will make the height of the element 100% of the viewport height */
  z-index: 0;
}

/* Add gradient background for the fade effect */
.fade {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
}
</style>