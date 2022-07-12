<script setup>
import { ref } from "vue";
import BaseContainer from "../ui/baseContainer.vue";
import coachItems from "./coachItem.vue";
import { useCoachStore } from "../../store/coaches";

const isThereContact = ref(false);
const allContact = useCoachStore().contacts;
if (allContact.length != 0) {
  isThereContact.value = true;
}
</script>

<template>
  <BaseContainer>
    <div v-if="isThereContact" class="space-y-4">
      <div class="cardDefaults" v-for="contact in allContact" :key="contact">
        <coach-items
          :selectedCoachData="contact.selectedCoach"
          :selectedCoachId="contact.id"
        ></coach-items>
        <div>
          <div class="font-semibold text-2xl">You'r Massage:</div>
          {{ contact.message }}
        </div>
      </div>
    </div>
    <div v-else class="cardDefaults text-bold">
      <div>There is no contact yet</div>
      <router-link class="font-bold text-green-500" to="/coaches"
        >Check Coachs!</router-link
      >
    </div>
  </BaseContainer>
</template>


<style scoped>
</style>