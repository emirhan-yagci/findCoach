<script setup>
    import { defineProps } from 'vue';
    import { useCoachStore } from '../../store/coaches';

import { useRouter,useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()

    const props = defineProps(["coachId"])
    function goDetails(){
        
        useCoachStore().selectedCoachId = props.coachId
        router.push({name:"detailsPage",params:{coachId:props.coachId}})
    }
</script>
<template>
  <button @click="goDetails">
    <slot></slot>
  </button>
</template>


<style scoped>

</style>