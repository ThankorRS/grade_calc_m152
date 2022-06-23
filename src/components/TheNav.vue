<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../components/data'

export default defineComponent({
    setup() {
      const props = data;

      function avg(subject: { grades: any[]; }){
      }
    },
    data(){
      return data;
    },
    methods: {
      avg: function(grades: any){
        let sum = 0;
        grades.forEach((element: any) => {
          sum += parseFloat(element.grade);
        });        
        return (Math.round(sum / grades.length * 100) / 100).toFixed(2);
      }
    }
})
</script>

<template>
  <nav class="fixed bg-custom-color-primary-viceversa-background text-custom-color-primary-viceversa-text w-full h-20 flex items-end">
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
    <div class="p-2 pl-10 flex">
      <p class="pr-4">Gesamt</p>
      <p><span class="font-medium mr-1">Ø</span>{{ 4 }}</p>
    </div>
  </nav>
</template>