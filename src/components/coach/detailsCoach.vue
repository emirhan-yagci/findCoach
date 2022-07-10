<script setup>
import { defineProps, ref } from "vue";
import { useRoute } from "vue-router";
import { useCoachStore } from "../../store/coaches";
import BaseContainer from "../ui/baseContainer.vue";

const coachStore = useCoachStore();
const route = useRoute();

const fullName = ref("");
const hourlyPrice = ref("");
const description = ref("");

const selectedId = ref(route.params.coachId);
const selectedCoach = ref("");
console.log(selectedCoach);
selectedCoach.value = coachStore.allCoach[route.params.coachId];

if (selectedCoach.value == undefined) {
  coachStore.fetchCoaches().then(() => {
    selectedCoach.value = coachStore.allCoach[route.params.coachId];

    setDatas();
  });
} else {
  setDatas();
}
function setDatas() {
  fullName.value = `${selectedCoach.value.firstName}  ${selectedCoach.value.lastName}`;
  hourlyPrice.value = selectedCoach.value.hourlyPrice;
  description.value = selectedCoach.value.description;
}
</script>

<template>
  <BaseContainer>
    <section class="space-y-10">
      <div class="cardDefaults space-y-2">
        <h1 class="font-bold text-2xl">
          {{ fullName }}
        </h1>
        <div class="font-bold text-lg">{{ hourlyPrice }}</div>
      </div>
      <div class="cardDefaults space-y-2">
        <contact-btn
          class="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          >CONTACT</contact-btn
        >
      </div>
      <div class="cardDefaults">
        <coach-expert :coachId="route.params.coachId"></coach-expert>
        <div>{{ description }}</div>
      </div>
    </section>
  </BaseContainer>
</template>


<style scoped>
</style>