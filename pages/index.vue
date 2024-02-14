<template>
  <div>
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <div class="absolute w-full h-full z-10">
      <IndexHero />
      <div class="bg-white dark:bg-slate-800">
        <IndexStatement id="statement" class="pt-20" />
        <IndexTextpic
            v-for="picture in pictures" :key="picture.title" :isright="picture.isright"
            :title="picture.title" :desc="picture.desc" :img="picture.img" :alt="picture.alt" :width="picture.width"
            :height="picture.height" />
        <IndexTimeline />
        <IndexCta />
        <Footer />
      </div>
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
        <nuxt-img format="webp" :src="`/index/hero/img${slide.src}`" :alt="slide.alt" :width="slide.width" :height="slide.height"
                  class="object-cover w-full h-full swiper-lazy" densities="x1 x2"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const slides = [
  {
    src: "2.webp",
    alt: "A team image at a FOSSASIA event",
    width: 4032,
    height: 2268
  },
  {
    src: "3jpg.webp",
    alt: "A team image at a FOSSASIA event",
    width: 4000,
    height: 3000
  },
  {
    src: "4.webp",
    alt: "An organiser giving a presentation during the BuildingBloCS 2023 June Conference",
    width: 3422,
    height: 2507
  },
  {
    src: "5.webp",
    alt: "An organiser giving a presentation in a lecture hall during the BuildingBloCS 2023 June Conference",
    width: 3648,
    height: 2736
  },
  {
    src: "6.webp",
    alt: "An organiser giving a presentation in a lecture hall during the BuildingBloCS 2023 June Conference",
    width: 4032,
    height: 3024
  },
  {
    src: "3png.webp",
    alt: "Students at the BuildingBloCS 2023 June Conference",
    width: 8256,
    height: 5540
  },
]

const pictures = [
  {
    title: "By students, for students.",
    desc: "BuildingBloCS is the largest nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.",
    img: "/index/img1.webp",
    alt: "Students at a BuildingBloCS event",
    width: 718,
    height: 539,
    isright: true
  },
  {
    title: "Multi-focused.",
    desc: "We touch base on various topics, like AI, Cybersecurity and Software Development, to varying levels of complexity. It's truly fun for everyone!",
    img: "/index/img4.webp",
    alt: "An organiser speaking at a FOSSASIA event",
    width: 5457,
    height: 3638,
    isright: false
  },
  {
    title: "Passionate Speakers.",
    desc: "We give opportunities to various speakers to talk about their work and interests, and we don't shy away from getting into the nitty-gritty.",
    img: "/index/img3.webp",
    alt: "Two organisers speaking at a FOSSASIA event",
    width: 6000,
    height: 4000,
    isright: true
  },
  {
    title: "Events for everyone.",
    desc: "We host events for students from Secondary Schools, JCs, Polys and International Schools. All are welcome!",
    img: "/index/img2.webp",
    alt: "Students having a group discussion at a BuildingBloCS event",
    width: 4000,
    height: 2250,
    isright: false
  }
]

useSeoMeta({
  title: 'BuildingBloCS 2024',
  description: "Ignite your passion in computing",
  ogTitle: "BuildingBloCS 2024",
  ogDescription: "Ignite your passion in computing",
  ogImage: "/index/hero/img2.webp",
  ogUrl: "https://buildingblocs.sg/",
  twitterTitle: "BuildingBloCS 2024",
  twitterDescription: "Ignite your passion in computing",
  twitterImage: "/index/hero/img2.webp",
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
