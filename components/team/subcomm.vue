<template>
  <div>
    <h2 class="text-3xl py-4 tracking-tight text-left font-extrabold text-gray-900 dark:text-white">{{ name }}</h2>
    <div class="flex flex-wrap justify-center pb-8">
      <TeamCard class="m-2" v-for="(teamMember, index) in members" :key="index" :teamMember="teamMember"></TeamCard>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'members'
  ]
}
</script>