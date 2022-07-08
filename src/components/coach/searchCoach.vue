<script setup>
import BaseContainer from "../ui/baseContainer.vue";
</script>

<template>
  <BaseContainer>
    <div class="cardDefaults">
      <h2 class="font-semibold text-xl">Find Your Coach</h2>
      <div class="space-x-2 items-center">
        
        <input id="_frontend" type="checkbox" />
        <label for="_frontend">Frontend Development</label> 
        <input id="_backend" type="checkbox" />
        <label for="_backend">Backend Development</label>
        <input id="_career" type="checkbox" />
        <label for="_career">Career Advisory</label>
      </div>
    </div>
  </BaseContainer>
</template>


<style scoped>

</style>