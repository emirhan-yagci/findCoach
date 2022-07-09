<script setup>
import {inject} from "vue";

let coachData = inject("coachData")
console.log(coachData);
</script>
<template>
  
   <div
          v-for="(coach,index) in coachData"
          :key="coach"
          class="border-2 border-green-500 p-4 text-black rounded-lg"
        >
          <div class="space-y-2">
            <h1 class="font-bold text-xl">
              {{ coach.description }}
            </h1>
            <div class="font-semibold">$<span>{{coach.hourlyPrice}}</span>/hour</div>
            <div class="flex justify-start space-x-1 flex-wrap text-white sm:justify-center">
              <div :class="expert" class="px-3 py-1 rounded-md text-sm" v-for="(expert) in coach.expertise" :key="expert">
                    {{expert}}
              </div>
            </div>
            <div class="flex justify-end">
                <details-btn :coachId="index" class="bg-green-600 text-white transition-all px-4 py-2 rounded-xl hover:bg-green-500">
                    View Details
                </details-btn>
            </div>
          </div>
        </div>
</template>


<style scoped>
.Frontend{
    @apply bg-indigo-900
}
.Backend{
    @apply bg-purple-900

}
.Career{
     @apply bg-red-800

}
</style>