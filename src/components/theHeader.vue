<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

function navBack() {
  console.log(route.path);
  if (route.path != "/coaches" && route.path != "/coaches/") {
    router.back();
  }
}
</script>

<template>
  <nav
    class="
      w-full
      relative
      bg-blue-500
      flex
      justify-between
      items-center
      px-10
      p-10
      text-white
    "
  >
    <router-link to="/" class="font-bold text-3xl">Find Coach</router-link>
    <div class="space-x-5 font-semibold">
      <router-link
        :to="{ name: 'coachPage' }"
        class="px-6 py-3 rounded-lg transition-all hover:bg-blue-800"
        >All Coaches</router-link
      >
      <router-link
        :to="{ name: 'contactsPage' }"
        class="px-6 py-3 rounded-lg transition-all hover:bg-blue-600/50"
        >Contacts</router-link
      >
    </div>
    <div
      @click="navBack"
      class="
        absolute
        top-[calc(100%+10px)]
        bg-orange-500
        px-3
        py-1
        rounded-lg
        cursor-pointer
      "
    >
      <img
        src="../assets/arrow.png"
        class="w-[30px] h-[30px]"
        style="filter: brightness(0) invert(1)"
      />
    </div>
  </nav>
</template>


<style scoped>
.route-active {
  @apply bg-blue-900;
}
</style>

