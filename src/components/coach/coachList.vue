<script setup>
import { ref, provide, inject, defineProps, watch } from "vue";

import { useCoachStore } from "../../store/coaches.js";
import coachItems from "./coachItem.vue";
import BaseContainer from "../ui/baseContainer.vue";

const props = defineProps(["expertWrapper"]);
const coachItemContainer = ref("");
//when user select any expert for filter will execute
watch(
  () => {
    return props.expertWrapper;
  },
  (newValue, oldValue) => {
    const coachesWrapper = useCoachStore().allCoach;
    //get choosed experties and push this array
    const choosedExpert = Object.values(props.expertWrapper).sort();
    //get loop the all coachItem
    coachesWrapper.forEach((item, index) => {
      const virtualExpertise = [];
      item.expertise.forEach((expert, index) => {
        virtualExpertise.push(expert);
        virtualExpertise.sort();
      });
      //if user delete chooses again show all
      if (choosedExpert.length == 0) {
        Array.from(coachItemContainer.value.children).forEach(() => {
          coachItemContainer.value.children[index].style.display = "block";
        });
      } else if (virtualExpertise.length == choosedExpert.length) {
        let isTrue = false;
        choosedExpert.forEach((choosed, choosedIndex) => {
          if (choosed == virtualExpertise[choosedIndex]) {
            isTrue = true;
          } else {
            isTrue = false;
          }
        });
        //Delete commands
        if (isTrue) {
          coachItemContainer.value.children[index].style.display = "block";
        } else {
          coachItemContainer.value.children[index].style.display = "none";
        }
      } else {
        coachItemContainer.value.children[index].style.display = "none";
      }
    });
  }
);

const coachStore = useCoachStore();

let coachWrap = ref([]);
let isRefreshing = ref(false);
function refreshCoach() {
  isRefreshing.value = true;
  coachWrap.value = [];

  coachWrap.value = coachStore.fetchCoaches().then((data) => {
    isRefreshing.value = false;
    coachWrap.value = data;
  });
}
refreshCoach();

provide("coachData", coachWrap);
</script>

<template>
  <BaseContainer>
    <div class="cardDefaults">
      <div class="flex justify-between items-center">
        <div
          @click="refreshCoach()"
          class="
            px-3
            py-2
            border-2
            cursor-pointer
            transition-all
            border-purple-600
            rounded-3xl
            hover:bg-purple-600 hover:text-white
          "
        >
          Refresh
        </div>
        <router-link
          v-if="useCoachStore().isRegistered == false"
          :to="{ name: 'registerPage' }"
          class="px-4 py-2 bg-purple-600 text-white rounded-3xl"
          >Register as Coach</router-link
        >
        <div v-else class="px-4 py-2 bg-red-600 text-white rounded-3xl">
          You Already Registered
        </div>
      </div>
      <!--COACH LİST WRAPPER-->
      <div v-if="!isRefreshing" class="space-y-5 py-5" ref="coachItemContainer">
        <coach-items
          v-for="(coach, index) in coachWrap"
          :key="coach"
          :selectedCoachData="coach"
          :selectedCoachId="index"
        ></coach-items>
      </div>
      <!--loading svg-->
      <div v-else class="flex items-center justify-center">
        <svg
          role="status"
          class="w-1/6 h-1/6 mr-2 text-purple-200 animate-spin fill-orange-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  </BaseContainer>
</template>


<style scoped>
</style>