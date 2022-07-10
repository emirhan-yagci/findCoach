<script setup>
import { useRoute,useRouter } from "vue-router";
import { ref } from "vue"
import BaseContainer from "../ui/baseContainer.vue";
import { useCoachStore } from "../../store/coaches";

const route = useRoute();
const router = useRouter();

const coachStore = useCoachStore();
const messageArea = ref("")
//TODO : DİREK URLDEN GELENLERE BAK
function sendMessage(){
  alert("inside")
    let selectedCoach = route.params.coachId;
    coachStore.setContact(selectedCoach,messageArea.value.value);
    router.push("/coaches")
}
</script>

<template>
  <BaseContainer>
    <div class="cardDefaults space-y-3">
      <div class="flex flex-col">
        <label for="" class="font-semibold">You'r Email</label>
        <input class="formInputs" type="text" />
      </div>
      <div class="flex flex-col">
        <label for="" class="font-semibold">Message</label>
        <textarea
        ref="messageArea"
          class="formInputs"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div @click="sendMessage" class="text-center">
        <button class="px-4 py-2 bg-purple-700 text-white rounded-md">Send Message</button>
      </div>
    </div>
  </BaseContainer>
</template>


<style scoped>
.formInputs {
  @apply outline-none border-2 border-gray-400 px-3 py-1;
}

.formInputs:focus {
  @apply bg-purple-100;
}
</style>