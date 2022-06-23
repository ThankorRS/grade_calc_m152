<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../components/data'

export default defineComponent({
    setup() {
    },
    data(){
      return data;
    },
    // computed: {
    //   av
    // },
    methods: {
      avg: function(){
        let sum = 0;

        data.forEach(element => {
          const subSum: any = element.grades.reduce((sum: number, current: number) => sum + current.grade, 0);
          sum = sum + (Math.round(subSum / element.grades.length * 100) / 100);
        });
        return (Math.round(sum / data.length * 100) / 100).toFixed(1);
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
      <p><span class="font-medium mr-1">Ø</span>{{ avg() }}</p>
    </div>
  </nav>
</template>