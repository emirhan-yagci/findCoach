<script setup>
import {defineProps} from "vue";
const props = defineProps(["selectedCoachData","selectedCoachId"])

</script>
<template>
  
   <div
         
          class="border-2 border-green-500 p-4 text-black rounded-lg coachItem" 
        >
          <div class="space-y-2">
            <h1 class="font-bold text-xl">
              {{ selectedCoachData.firstName }} {{ selectedCoachData.lastName }}

            </h1>
            <div class="font-semibold">{{selectedCoachData.hourlyPrice}}</div>
            <div>
              <coach-expert :coachId="selectedCoachId"></coach-expert>
            </div>
            <div class="flex justify-end">
                <details-btn :coachId="selectedCoachId" class="bg-green-600 text-white transition-all px-4 py-2 rounded-xl hover:bg-green-500">
                    View Details
                </details-btn>
            </div>
          </div>
        </div>
</template>


<style scoped>

</style>