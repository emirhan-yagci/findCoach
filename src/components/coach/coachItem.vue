<script setup>
import {inject,provide} from "vue";

let coachData = inject("coachData")

console.log(coachData.value[2]);
</script>
<template>
  
   <div
          v-for="(coach,index) in coachData"
          :key="coach"
          class="border-2 border-green-500 p-4 text-black rounded-lg"
        >
          <div class="space-y-2">
            <h1 class="font-bold text-xl">
              {{ coach.firstName }} {{ coach.lastName }}

            </h1>
            <div class="font-semibold">{{coach.hourlyPrice}}</div>
            <div>
              <coach-expert :coachId="index"></coach-expert>
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

</style>