<script setup>
import { defineProps, ref } from "vue";
import { useRoute } from "vue-router";
import { useCoachStore } from "../../store/coaches";
const route = useRoute();
const props = defineProps(["coachId"]);
const coachStore = useCoachStore();

const selectedExpertise = ref(null);
//if user coming from url detect and fetch data
try {
  selectedExpertise.value = coachStore.allCoach[props.coachId].expertise;
} catch (e) {
  coachStore.fetchCoaches().then(() => {
    selectedExpertise.value = coachStore.allCoach[props.coachId].expertise;
  });
}
</script>

<template>
  <div
    class="
      flex flex-wrap
      items-start
      justify-start
      text-white
      w-full
      lg:justify-evenly
    "
  >
    <div
      v-for="expert in selectedExpertise"
      :key="expert"
      :class="expert"
      class="mb-2 mr-2 px-3 py-1 rounded-lg"
    >
      <span>{{ expert }}</span>
    </div>
  </div>
</template>


<style scoped>
.Frontend {
  @apply bg-indigo-900;
}
.Backend {
  @apply bg-purple-900;
}
.Career {
  @apply bg-red-800;
}
</style>