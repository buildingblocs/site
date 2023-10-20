<template>
  <div>
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <div class="absolute w-full h-full z-10">
      <Head>
        <Title>BuildingBloCS 2023</Title>
      </Head>
      <IndexHero />
      <div class="bg-white dark:bg-slate-800">
        <IndexStatement class="pt-20" />
        <IndexTextpic 
          v-for="picture in pictures" :key="picture.title" :isright="picture.isright"
          :title="picture.title" :desc="picture.desc" :img="picture.img" />
      </div>
      <IndexTimeline />
      <EventsCta class="bg-white dark:bg-slate-800" />
      <!-- <IndexCta /> -->
      <Footer />
    </div>
    
    <!-- Swiper background -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :pagination="true"
      :lazyPreloadPrevNext="3"
      :autoplay="{ delay: 8000, disableOnInteraction: false }"
      class="z-0"
    >
      <SwiperSlide v-for="slide in slides" :key="slide">
        <div class="absolute top-0 left-0 w-full h-full fade from-transparent to-black" />
        <nuxt-img format="webp" :src="slide"
          class="object-cover w-full h-full swiper-lazy" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const slides = [
  "2.jpg", "3.jpg", "4.png", "5.jpg", "6.jpg", "3.png",
].map(it => `/index/hero/img${it}`)

const pictures = [
  {
    title: "By students, for students.",
    desc: "BuildingBloCS is the largest nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.",
    img: "/index/img1.png",
    isright: true
  },
  {
    title: "Multi-focused.",
    desc: "We touch base on various topics, like AI, Cybersecurity and Software Development, to varying levels of complexity. It's truly fun for everyone!",
    img: "/index/img4.png",
    isright: false
  },
  {
    title: "Passionate Speakers.",
    desc: "We give opportunities to various speakers to talk about their work and interests, and we don't shy away from getting into the nitty-gritty.",
    img: "/index/img3.jpg",
    isright: true
  },
  {
    title: "Events for everyone.",
    desc: "We host events for students from Secondary Schools, JCs, Polys and International Schools. All are welcome!",
    img: "/index/img2.jpg",
    isright: false
  }
]

useSeoMeta({
  description: "Ignite your passion in computing",
  ogTitle: "BuildingBloCS 2023",
  ogDescription: "Ignite your passion in computing",
  ogImage: "/index/hero/img2.jpg",
  ogUrl: "https://buildingblocs.sg/",
  twitterTitle: "BuildingBloCS 2023",
  twitterDescription: "Ignite your passion in computing",
  twitterImage: "/index/hero/img2.jpg",
  twitterCard: "summary_large_image",
});
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
/* .fade {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
}*/

.fade {
  mask: linear-gradient(transparent, transparent, black);
  backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
}

.swiper-pagination-bullet-active {
  background-color: #eb9d39;
}

.swiper-pagination-bullet-inactive {
  opacity: 1;
}
</style>
