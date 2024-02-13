<template>
  <div>
    <div class="fixed w-full z-30 top-0">
      <Nav />
    </div>
    <main class="bg-white dark:bg-slate-800 pt-16 text-gray-900 dark:text-white px-8 md:px-7">
      <div class="pt-16 sm:pt-32 relative isolate">
        <PatchesPurple />
        <ContentDoc class="prose dark:prose-invert mx-auto max-w-7xl prose-h1:sm:text-6xl prose-h1:tracking-tight prose-h1:font-bold" />
      </div>
      <Footer />
    </main>
  </div>
</template>