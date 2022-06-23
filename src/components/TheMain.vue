<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../components/data'
import { ref } from '@vue/reactivity';

export default defineComponent({
    setup() {
    },
    data(){
      let input = ref(1);
      const formError = ref(false);
      return {data, input, formError};
    },
    methods: {
      avg: function(grades: any){
        let sum = 0;
        grades.forEach((element: any) => {
          sum += parseFloat(element.grade);
        });        
        return (Math.round(sum / grades.length * 100) / 100).toFixed(2);
      },
      remove: function(element: any, grade: { id: any; }){
        element.grades.splice(element.grades.findIndex(e => e.id === grade.id), 1)
      },
      add: function(element: any, grade: number){
        if (grade >= 1.0 && grade <= 6.0) {
          element.grades.push({ 
            id: (element.grades.length + 1).toString(),
            grade: grade
          });
        }
      }
    }
})
</script>

<template>
  <div class="mt-20 mb-20">
    <div class="my-2 flex items-center p-2">
        <input v-model="input" type="text" class="w-16 block input" />
        <button type="button" class="icon-btn ml-2 p-2 pl-3 pr-3 hover:bg-green-300" @click="add(input)">+</button>
    </div>
    <div v-for="element of data">
      <article class="bg-white rounded mt-5 p-4">
        <div class="flex items-center">
          <p><span class="font-medium mr-1">Ø</span>{{ avg(element.grades) }}</p>
          <h2 class="font-medium p-2">{{ element.name }}</h2>
        </div>
        <section class="my-4 flex flex-wrap">
            <div class="p-2 pl-4 pr-4 mr-2 mb-2 bg-gray-200 hover:bg-red-300 cursor-pointer" v-for="grade of element.grades" @click="remove(element, grade)">
              <p>{{grade.grade.toFixed(2)}}</p>
            </div>
        </section>
        <div class="my-2 flex items-center">
            <input v-model="input" type="number" placeholder="6.0" min="1.0" max="6.0" class="w-16 block input" />
            <button type="button" class="icon-btn ml-2 p-2 pl-3 pr-3 hover:bg-green-300" @click="add(element, input)">+</button>
        </div>
      </article>
    </div>
  </div>
</template>