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
  <div class="mt-20 mb-20">
    <div v-for="element of $data">
      <article class="bg-white rounded mt-5 p-4">
        <div class="flex items-center">
          <p><span class="font-medium mr-1">Ø</span>{{ avg(element.grades) }}</p>
          <h2 class="font-medium p-2">{{ element.name }}</h2>
        </div>
        <section class="my-4 flex flex-wrap">
            <div class="p-2 pl-4 pr-4 mr-2 bg-gray-200 hover:bg-red-300 cursor-pointer" v-for="grade of element.grades" @click="removeGrade(grade)">
              <p>{{grade.grade.toFixed(2)}}</p>
            </div>
        </section>
        <div class="my-2 flex items-center">
            <input type="number" placeholder="6.0" min="1.0" max="6.0" class="w-16 block input" />
            <button type="button" class="icon-btn ml-2 p-2 pl-3 pr-3 hover:bg-green-300">+</button>
        </div>
      </article>
    </div>
  </div>
</template>