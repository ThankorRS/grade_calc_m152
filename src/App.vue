<script setup lang="ts">
import TheMain from '@/components/TheMain.vue';
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
  <section>
    <header>
      <TheNav />
    </header>
    <main class="p-2 inset-0">
      <TheMain />
    </main>
    <footer class="fixed bottom-0 w-screen h-16">
      <TheFooter />
    </footer>
  </section>
</template>


