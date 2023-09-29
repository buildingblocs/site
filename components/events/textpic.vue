<template>
    <EventsLtextRpic v-if="isright" :title="title" :desc="desc" :img="img" :date="date" :links="links" />
    <EventsRtextLpic v-if="!isright" :title="title" :desc="desc" :img="img" :date="date" :links="links" />
</template>
<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'textpic',
    props: ['title', 'desc', 'img', 'date', 'links', 'isright']
})
</script>