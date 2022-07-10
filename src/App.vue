<script setup>
 import { useCoachStore } from "./store/coaches.js"
</script>

<template>

  <theHeader class="mb-16"/>
  <router-view name="searchCoach" class="mb-7"></router-view>
  <div>
  <router-view></router-view>
  </div>
</template>

<style>

</style>
