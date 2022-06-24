<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../components/data'

export default defineComponent({
    setup() {
    },
    data(){
      return data;
    },
})
</script>

<template>
  <nav class="fixed bg-custom-color-primary-viceversa-background text-custom-color-primary-viceversa-text w-full h-20 flex items-end z-50">
    <div class="logo">
      <img class="p-2 w-20 h-20 rounded-full"
        src="https://i.pinimg.com/originals/49/a7/24/49a7247bc0f530e1d427f6dab3c32cf0.jpg" 
      />
    </div>
    <div>
      <p class="p-2 text-2xl">
        Noten App 
        <small class="text-sm">by Sunie™</small>
      </p>
    </div>
  </nav>
</template>