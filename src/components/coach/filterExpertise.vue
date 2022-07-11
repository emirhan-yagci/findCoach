<script setup>
import { ref , defineEmits} from "vue";
import BaseContainer from "../ui/baseContainer.vue";
const selectedExpert = ref([])
const emit = defineEmits(["filteredExpert"])
function selectExpert() {
  emit("filteredExpert",selectedExpert.value);
}

</script>

<template>
  <BaseContainer>
    <div class="cardDefaults">
      <h2 class="font-semibold text-xl">Find Your Coach</h2>
      <div class="space-x-2 items-center">
        <span >
          <input
            id="_frontend"
            type="checkbox"
            value="Frontend Development"
            v-model="selectedExpert"
            @change="selectExpert"
          />
          <label for="_frontend" 
            >Frontend Development</label
          >
        </span>
        <span>
          <input
            id="_backend"
            type="checkbox"
            value="Backend Development"
            v-model="selectedExpert"
            @change="selectExpert"
          />
          <label for="_backend" 
            >Backend Development</label
          >
        </span>
        <span >
          <input
            id="_career"
            type="checkbox"
            value="Career Advisory"
            v-model="selectedExpert"
            @change="selectExpert"
          />
          <label for="_career" >Career Advisory</label>
        </span>
      </div>
    </div>
  </BaseContainer>
</template>


<style scoped>
</style>