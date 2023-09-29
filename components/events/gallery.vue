<template>
    <div>
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="(image, slide) in images" :key="slide">
                <NuxtImg
                    :id="slide"
                    format="webp"
                    :src="image"
                    :width="1000"
                    class="w-full h-full rounded-lg object-cover object-center relative z-10 text-[0px]"
                />
            </Slide>
        </Carousel>

        <Carousel class="bg-black py-2"
            id="thumbnails"
            :itemsToShow="3.5"  :transition="250"
            v-model="currentSlide"
            ref="carousel"
        >
            <Slide v-for="(image, slide) in images" :key="slide">
                <div @click="slideTo(slide)">
                    <NuxtImg
                        :id="slide"
                        :height="100"
                        :quality="75"
                        format="webp"
                        :src="image"
                        class="w-full h-full object-cover relative z-10 rounded-sm"
                    />
                </div>
            </Slide>
        </Carousel>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Gallery',
  props: ['images'],
//   components: [Carousel],
  data: () => ({
    currentImage: 0,
    currentSlide: 0,
  }),
  methods: {
    handleClick() {
        this.currentImage = (this.currentImage + 1) % (this.images.length)
    },
    slideTo(val) {
      this.currentSlide = val
    }
  },
})
</script>
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>