<script setup>
    import { defineProps } from 'vue';

    const props = defineProps(["coachId"])
    console.log(props.coachId);
</script>
<template>
  <button @click="goDetails">
    <slot></slot>
  </button>
</template>


<style scoped>

</style>