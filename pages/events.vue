<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <PatchesPurple />
                    <PageTitle text="Our Events" />
                    <EventsTextpic 
                        v-for="item in events" 
                        :title="item.title" :desc="item.desc" :img="item.img" 
                        :date="item.date" :isright="item.isright" 
                        :links="item.links ?? []" />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const events = [
    {
        title: "March Conference",
        desc:  "The March Conference aims to foster an interest in programming by featuring three beginner-level workshops on Python, Data Analytics, and HTML, CSS and Javascript. To put our participants' learning to the test, we have the \"Starvation\" challenge, our very own open-source hackathon that sums up the conference!",
        img: '/events/img1.webp',
        date: '12-13 March 2023',
        isright: true,
        links: [
            {
                title: "Read More!",
                url: "/events/march"
            }
        ]
    },
    {
        title: "BBCS × FOSSASIA Summit",
        desc: "The FOSSASIA Summit 2023 is a hybrid event conducted both online and in-person, part of a series of FOSSASIA events held since 2009. Participate to connect with businesses, developers, and tech communities from around the world and learn about the latest developments in open source! BuildingBloCS is proud to be partnering FOSSASIA to present several workshops and talks, as well as our very own exhibition booth at the FOSSASIA Summit 2023.",
        img: '/events/img2.webp',
        date: '12-13 March 2023',
        isright: false,
        links: [
            {
                title: "Read More!",
                url: "/events/foss"
            }
        ]
    },
    {
        title: 'June Conference',
        desc: "The June Conference is our flagship computing event held at NUS School of Computing. This year, the theme is Artificial Intelligence. We are holding over 17 workshops, 5 talks, and 3 hackathons over 3 tracks to cater to various skill levels!",
        img: '/events/img3.webp',
        date: '29-30 May, 5 June 2023',
        isright: true,
        links: [
            {
                title: "Read More!",
                url: "/events/june"
            }
        ]
    },
    {
        title: 'September Conference',
        desc: "The upcoming September Conference aims to train students with the competencies of Web Development, with workshops on frameworks like React and Vue, in addition to PythonAnywhere (Flask) and Continuous Integration & Continuous Deployment (CI/CD). This event will cap off with a 3D2N hackathon to test students for their web development skill and competency.",
        img: '/events/img4.webp',
        date: '4-8 September 2023',
        isright: false,
        links: [
            {
                title: "Read More!",
                url: "/events/sept"
            }
        ]
    },
    {
        title: 'BBCS × BlahajCTF',
        desc: "The inaugural BlahajCTF is a Capture-the-Flag Competition open to Secondary School and Junior College students aiming to learn basic cybersecurity competencies. This year, BBCS is involved in the organisation of BlahajCTF in collaboration with Team Blahaj.",
        img: '/events/img5.webp',
        date: '2 December 2023',
        isright: true,
        links: [
            {
                title: "Read More!",
                url: "/events/ctf"
            }
        ]
    }
]

useSeoMeta({
    title: 'Events - BuildingBloCS 2024',
    description: 'Ignite your passion in computing',
    ogTitle: 'Events - BuildingBloCS 2024',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img3jpg.webp',
    ogUrl: 'https://buildingblocs.sg/events',
    twitterTitle: 'Events - BuildingBloCS 2024',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img3jpg.webp',
    twitterCard: 'summary_large_image'
})
</script>