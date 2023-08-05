<template>
    <div class="bg-white dark:bg-slate-800">

        <head>
            <title>Our Partners - BuildingBlocs 2023</title>
        </head>
        <div>
            <Nav />
            <div class="pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[80deg] bg-gradient-to-tr from-[#dbc7b4] to-[#fff2c8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-7xl">
                        <div class="text-center">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-24">
                                Our Partners</h1>
                        </div>
                        <div class="flex justify-center">
                            <div class="flex flex-wrap justify-center">
                            <div v-for="item in partners" :key="item.name" class="m-2">
                                <div
                                    class="max-w-xs border rounded-lg shadow bg-gray-600 border-gray-500" ref="card">
                                    <div class="m-2 rounded-t-lg flex justify-center">
                                        <img :src="item.pic" :alt="item.name" class="h-20 object-contain" />
                                    </div>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 :key="item.name"
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-100 line-clamp-1">
                                                {{ item.name }}</h5>
                                        </a>
                                        <p :key="item.desc" class="mb-3 font-normal text-gray-200">{{
                                            item.desc }}</p>
                                    </div>
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
    </div>
</template>

<script setup>
const partners = [
    { pic: '/partners/aisg.png', name: 'AI Singapore', desc: 'AISG is a government-driven organization dedicated to accelerating the adoption of artificial intelligence in Singapore. They help Singaporeans accustom to our evolving world.' },
    { pic: '/partners/bettersg.svg', name: 'Better.sg', desc: 'A volunteer-run charity that build open source products that is free anyone to use. They specialize on building online tools as well as provides resources and support the #techforgood community.' },
    { pic: '/partners/cys.png', name: 'Cyber Youth Singapore', desc: 'Cyber Youth Singapore is a registered charity under the Charities Act. They are a youth movement that empowers youths with skills and opportunities to become trailblazers of our digital future.' },
    { pic: '/partners/gcloud.svg', name: 'Google Cloud', desc: 'Google Cloud is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube.' },
    { pic: '/partners/meta.svg', name: 'Meta', desc: 'A global tech giant and with their cutting-edge technologies and vast resources, Meta is at the forefront of shaping the future of the digital landscape. They are a supporter of the open source community.' },
]
</script>

<script>
export default {
  // Call the function after the component is mounted
  mounted() {
    this.adjustCardHeights();
    // Add an event listener to re-adjust card heights on window resize
    window.addEventListener("resize", this.adjustCardHeights);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener("resize", this.adjustCardHeights);
  },
  methods: {
    adjustCardHeights() {
      const cards = this.$refs.card;
      if (!cards) return;
      let maxCardHeight = 0;

      // Reset card heights to auto before calculating the new max height
      cards.forEach((card) => {
        card.style.height = "auto";
        maxCardHeight = Math.max(maxCardHeight, card.offsetHeight);
      });

      // Set all cards to the calculated max height
      cards.forEach((card) => {
        card.style.height = `${maxCardHeight}px`;
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

/* Set the desired number of columns at different breakpoints */
@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Add styling for the card container */
.m-2 {
  margin: 0.5rem;
}

/* Adjust card content styling as needed */
.max-w-xs {
  max-width: 20rem;
}
</style>