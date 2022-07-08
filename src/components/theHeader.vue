<script setup>

</script>

<template>
  <nav class="w-full bg-purple-500 flex justify-between items-center px-10 p-10 text-white">
    <router-link to="/" class="font-bold text-3xl ">Find Coach</router-link>
    <div class="space-x-5 font-semibold">
        <router-link to="/coaches" class="px-6 py-3 rounded-lg transition-all hover:bg-purple-700">All Coaches</router-link>
        <router-link to="/contacts" class="px-6 py-3 rounded-lg transition-all hover:bg-purple-700">Contacts</router-link>
    </div>
  </nav>
</template>


<style scoped>
.route-active{
    @apply bg-purple-700
}
</style>

