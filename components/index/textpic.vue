<template>
    <IndexLtextRpic v-if="isright" :title="title" :desc="desc" :img="img" :width="width" :height="height" :alt="alt" />
    <IndexRtextLpic v-if="!isright" :title="title" :desc="desc" :img="img" :width="width" :height="height" :alt="alt" />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'textpic',
    props: ['title', 'desc', 'img', 'alt', 'width', 'height', 'isright']
})
</script>