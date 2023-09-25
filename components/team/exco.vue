<template>
  <section class="pb-24">
    <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
      <PageHead  title="Our Executive Committee (Exco)">
        In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.
      </PageHead>
      <div class="flex flex-wrap justify-center">
        <TeamCard class="m-2" v-for="(teamMember, index) in members" :key="index" :teamMember="teamMember"></TeamCard>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: [
    'members'
  ]
}
</script>