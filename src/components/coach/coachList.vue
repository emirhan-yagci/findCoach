<script setup>
import { useCoachStore } from "../../store/coaches.js";
import BaseContainer from "../ui/baseContainer.vue";

</script>

<template>
  <BaseContainer>
    <div class="cardDefaults">
      <div class="flex justify-between items-center">
        <div class="px-3 py-2 border-2 cursor-pointer transition-all border-purple-600 rounded-3xl hover:bg-purple-600 hover:text-white">Refresh</div>
        <router-link to="register" class="px-4 py-2 bg-purple-600 text-white rounded-3xl">Register as Coach</router-link>
      </div>
      <!--COACH LİST WRAPPER-->
      <div class=""></div>
    </div>
  </BaseContainer>
</template>


<style scoped>
</style>