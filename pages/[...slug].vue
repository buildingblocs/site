<template>
  <div>
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <main class="bg-white dark:bg-slate-800 pt-16 text-gray-900 dark:text-white px-4 md:px-7">
      <div class="mx-auto max-w-7xl pt-16 sm:pt-32 relative isolate">
        <PatchesWhite />
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-10 sm:pb-24 text-center">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
      <Footer />
    </main>
  </div>
</template>