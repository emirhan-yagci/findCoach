<script setup>
import {defineProps, ref} from "vue"
import { useRoute } from "vue-router";
import { useCoachStore } from '../../store/coaches';
import BaseContainer from '../ui/baseContainer.vue';

const coachStore = useCoachStore()
const route = useRoute()

const selectedCoach = ref(null)
  selectedCoach.value = coachStore.allCoach[route.params.coachId];

if(selectedCoach.value == undefined){
   coachStore.fetchCoaches().then(() => {
    selectedCoach.value = coachStore.allCoach[route.params.coachId];

  });
}



</script>

<template>
  <BaseContainer>
  <section class="space-y-10">
        <div class="cardDefaults space-y-2">
              <h1 class="font-bold text-2xl">
              {{ selectedCoach.firstName }} {{ selectedCoach.lastName }}

            </h1>
            <div class="font-bold text-lg"> {{ selectedCoach.hourlyPrice }} </div>
        </div>
        <div class="cardDefaults space-y-2">
            CONTACT
        </div>
        <div class="cardDefaults">
          <coach-expert :coachId="route.params.coachId"></coach-expert>
        </div>
        </section>
  </BaseContainer>
 
</template>


<style scoped>

</style>