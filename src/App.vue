<script setup>
 import { useCoachStore } from "./store/coaches.js"

 useCoachStore().fetchCoaches();
</script>

<template>

  <theHeader class="mb-12"/>

  <router-view name="searchCoach" class="mb-7"></router-view>
  <router-view class="mb-8"></router-view>
</template>

<style>

</style>
