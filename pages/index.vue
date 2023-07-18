<template>
    <div class="bg-white dark:bg-slate-800">
        <Head>
            <Title>BuildingBloCS 2023</Title>
        </Head>
        <div>
            <Nav />
            <IndexHero />
            <section id="statement" class="pt-20">
                <IndexStatement />
            </section>
            <IndexLtextRpic :title="LtextRpicTitle1" :desc="LtextRpicDesc1" :img="LtextRpicImg1" />
            <IndexRtextLpic :title="RtextLpicTitle1" :desc="RtextLpicDesc1" :img="RtextLpicImg1" />
            <IndexLtextRpic :title="LtextRpicTitle2" :desc="LtextRpicDesc2" :img="LtextRpicImg2" />
            <IndexRtextLpic :title="RtextLpicTitle2" :desc="RtextLpicDesc2" :img="RtextLpicImg2" />
            <IndexTimeline />
            <IndexCta />
            <Footer />
        </div>
    </div>
</template>
  
<script>
import IndexLtextRpic from '/components/index/LtextRpic.vue'
import IndexRtextLpic from '/components/index/RtextLpic.vue'

export default {
    components: {
        IndexLtextRpic, IndexRtextLpic,
    },
    data() {
        return {
            LtextRpicTitle1: 'By students, for students.',
            LtextRpicDesc1: 'BuildingBloCS is the largest nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.',
            LtextRpicImg1: '/index/img1.png',
            RtextLpicTitle1: 'Multi-focused.',
            RtextLpicDesc1: "We touch base on various topics, like AI, Cybersecurity and Software Development, to varying levels of complexity. It's truly fun for everyone!",
            RtextLpicImg1: '/index/img4.png',
            LtextRpicTitle2: 'Passionate Speakers.',
            LtextRpicDesc2: "We give opportunities to various speakers to talk about their work and interests, and we don't shy away from getting into the nitty-gritty.",
            LtextRpicImg2: '/index/img3.jpg',
            RtextLpicTitle2: 'Events for everyone.',
            RtextLpicDesc2: "We host events for students from Secondary Schools, JCs, Polys and International Schools. All are welcome!",
            RtextLpicImg2: '/index/img2.jpg',
        };
    }
}
</script>
  