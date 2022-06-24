<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../components/data'
import { ref } from '@vue/reactivity';

export default defineComponent({
    setup() {
    },
    data(){
      let input = ref(1);
      let text = ref();
      return {data, input, text};
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
      },
      newSub: function(name: string, data: any){
        data.push({
          id: (data.length + 1).toString(),
          name: name,
          grades: []
        })
      },
      avgOverall: function() {
        let sum = 0;

        data.forEach(element => {
          if (element.grades.length > 0) {
            const subSum: any = element.grades.reduce((sum: number, current: number) => sum + current.grade, 0);

            sum = sum + (Math.round(subSum / element.grades.length * 100) / 100);
          }
        });
        return (Math.round(sum / data.length * 100) / 100).toFixed(1);
      }
    }
})
</script>

<template>
  <div class="mt-20 mb-20">
    <div class="my-2 flex items-center p-2 bg-slate-300">
        <input v-model="text" type="text" placeholder="Fachname" class="block input sm:w-80 w-28 p-2 outline-0" @keyup.enter="newSub(text, data)"/>
        <button type="button" class="icon-btn mx-2 hover:bg-green-300 p-2 pr-4 pl-4 mr-5" @click="newSub(text, data)">+</button>
      <div class="p-2 pl-10 flex relative right-3 bg-slate-400 rounded sm:fixed">
        <p class="pr-4">Gesamt</p>
        <p><span class="font-medium mr-1">Ø</span>{{ avgOverall()}}</p>
      </div>
    </div>
    <div v-for="element of data">
      <article class="bg-slate-300 rounded mt-5 p-4">
        <div class="flex items-center">
          <p>
            <span class="font-medium mr-1">Ø</span>
            <span v-if="element.grades.length">{{ avg(element.grades) }}</span>
            <span v-else>0</span>
          </p>
          <h2 class="font-medium p-2">{{ element.name }}</h2>
        </div>
        <section class="my-4 flex flex-wrap">
            <div class="p-2 pl-4 pr-4 mr-2 mb-2 bg-gray-200 hover:bg-red-300 cursor-pointer" v-for="grade of element.grades" @click="remove(element, grade)">
              <p class="text-orange-800" v-if="grade.grade <= 3.999">{{grade.grade.toFixed(2)}}</p>
              <p class="text-green-800" v-else>{{grade.grade.toFixed(2)}}</p>
            </div>
        </section>
        <div class="my-2 flex items-center">
            <input v-model="input" type="number" placeholder="6.0" min="1.0" max="6.0" class="w-16 block input p-2 outline-0" @keyup.enter="add(element, input)"/>
            <button type="button" class="icon-btn ml-2 p-2 pl-3 pr-3 hover:bg-green-300" @click="add(element, input)">+</button>
        </div>
      </article>
    </div>
  </div>
</template>