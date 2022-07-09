<script setup>
 import { useCoachStore } from "./store/coaches.js"
</script>

<template>

  <theHeader class="mb-12"/>

  <router-view name="searchCoach" class="mb-7"></router-view>
  <keep-alive>
  <router-view class="mb-8"></router-view>
  </keep-alive>
</template>

<style>

</style>
