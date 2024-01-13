<template>
  <div class="bg-white dark:bg-slate-800">
    <Nav />
    <div class="pt-32">
      <div class="relative isolate pt-14 lg:px-8">
        <PatchesWhite />
        
        <PageTitle text="Our Partners" />

        <div class="mx-auto max-w-7xl">
          <div class="flex flex-wrap justify-center">
            <div v-for="item in partners" :key="item.name" class="m-2">
              <div class="max-w-xs border rounded-lg shadow bg-gray-600 border-gray-500" ref="card">
                <div class="m-2 rounded-t-lg pt-2 flex justify-center">
                  <nuxt-img :src="item.pic" :alt="item.name" class="h-20 object-contain" />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5 :key="item.name" 
                      class="mb-2 text-2xl font-bold tracking-tight text-gray-100 line-clamp-1">
                      {{ item.name }}
                    </h5>
                  </a>
                  <p :key="item.desc" class="mb-3 font-normal text-gray-200">
                    {{ item.desc }}
                  </p>
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
const partners = [
  { pic: '/partners/aisg.png', name: 'AI Singapore', desc: 'AISG is a government-driven organization dedicated to accelerating the adoption of artificial intelligence in Singapore. They help Singaporeans accustom to our evolving world.' },
  { pic: '/partners/bettersg.svg', name: 'Better.sg', desc: 'A volunteer-run charity that build open source products that is free anyone to use. They specialize on building online tools as well as provides resources and support the #techforgood community.' },
  { pic: '/partners/cys.png', name: 'Cyber Youth Singapore', desc: 'Cyber Youth Singapore is a registered charity under the Charities Act. They empower youths with skills and opportunities to become trailblazers of our digital future.' },
  { pic: '/partners/gcloud.svg', name: 'Google Cloud', desc: 'Google Cloud is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube.' },
  { pic: '/partners/meta.svg', name: 'Meta', desc: 'A global tech giant and with their cutting-edge technologies and vast resources, Meta is at the forefront of shaping the future of the digital landscape. They are a supporter of the open source community.' },
]

useSeoMeta({
    title: 'Partners - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'Partners - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img4.webp',
    ogUrl: 'https://buildingblocs.sg/partners',
    twitterTitle: 'Partners - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img4.webp',
    twitterCard: 'summary_large_image'
})
</script>