<script setup>
import BaseContainer from "../ui/baseContainer.vue";
import coachItems from "./coachItem.vue";
import { useCoachStore } from "../../store/coaches";

const allContact = useCoachStore().contacts;
console.log(allContact);
</script>

<template>
  <BaseContainer>
  <div class="space-y-4">
    <div class="cardDefaults" v-for="contact in allContact" :key="contact" >
     
        <coach-items :selectedCoachData="contact.selectedCoach" :selectedCoachId="contact.id"></coach-items>
        <div>
         <div class="font-semibold text-2xl"> You'r Massage:</div>
          {{contact.message}}
        </div>
    
    </div>
    </div>
  </BaseContainer>
</template>


<style scoped>
</style>