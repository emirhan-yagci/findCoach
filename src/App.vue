<script setup>
 import {  ref } from "vue";
 import { useCoachStore } from "./store/coaches.js";
 const expertWrapper = ref("") 

 function selectedExpert(providedExpert){
    setExpert(providedExpert)
}
  function setExpert(value){
      expertWrapper.value = value;

  }
</script>

<template>

  <theHeader class="mb-16"/>
    <router-view @filteredExpert="selectedExpert" name="searchCoach" class="mb-7"></router-view>
  <div>
    <router-view :expertWrapper="expertWrapper"></router-view>
  </div>
</template>

<style>

</style>
