<template>
    <IndexLtextRpic v-if="isright" :title="title" :desc="desc" :img="img" />
    <IndexRtextLpic v-if="!isright" :title="title" :desc="desc" :img="img" />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'textpic',
    props: ['title', 'desc', 'img', 'isright']
})
</script>