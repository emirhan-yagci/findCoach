<script setup>
  import {ref} from "vue"
  import { useRouter,useRoute} from "vue-router";

  const router = useRouter();
  const route = useRoute();

  function navContact(){
    router.push({name:"contactDetailPage",params: { coachId:route.params.coachId  }})
  }
</script>

<template>

   <div @click="navContact" class="inline-block">
     <slot ></slot>
   </div>


</template>


<style scoped>

</style>