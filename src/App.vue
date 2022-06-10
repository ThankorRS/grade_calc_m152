<script setup lang="ts">
import TheMain from '@/components/TheMain.vue'
import TheNav from '@/components/TheNav.vue'
</script>

<template>
  <div class="hidden">
    <div class="bg-custom-Space-Cadet w-100 h-20"></div>
    <div class="bg-custom-Air-Blue w-100 h-20"></div>
    <div class="bg-custom-Light-Green w-100 h-20"></div>
    <div class="bg-custom-Rosy-Brown w-100 h-20"></div>
    <div class="bg-custom-English-Red w-100 h-20"></div>
  </div>
  <section>
    <header>
      <TheNav />
    </header>
    <main>
      <TheMain />
    </main>
  </section>
</template>


