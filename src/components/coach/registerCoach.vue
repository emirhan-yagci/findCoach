<script setup>
import { ref } from "vue";

import BaseContainer from "../ui/baseContainer.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { useCoachStore } from "../../store/coaches.js";

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const hourlyPrice = ref("");
const expertise = ref([]);
function showAlert(text, description, type, position) {
  createToast(
    { title: text, description: description },
    {
      type: type,
      position: position,
      showIcon: true,
    }
  );
}
function sendRegisterRequest() {
  if (
    firstName.value.trim().length == 0 ||
    lastName.value.trim().length == 0 ||
    description.value.trim().length == 0 ||
    hourlyPrice.value.trim().length == 0 ||
    expertise.value.length == 0
  ) {
    showAlert(
      "Unsuccesfull",
      "There is some spaces at the form",
      "danger",
      "bottom-left"
    );
  } else if(useCoachStore().isRegistered == false) {
    fetch("https://findcoach-d02ab-default-rtdb.firebaseio.com/coaches.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        description: description.value,
        hourlyPrice: hourlyPrice.value,
        expertise: expertise.value,
      }),
    }).then((res) => {
      if (res.ok) {
        useCoachStore().isRegistered = true;
        showAlert(
          "Succesfull",
          "Registration completed",
          "success",
          "bottom-left"
        );
      }else{
        showAlert(
          "Unsuccesful",
          "Registration has failed",
          "danger",
          "bottom-left"
        );
      }
    })
    .catch(()=>{
        
        showAlert(
          "Unsuccesful",
          "Registration has failed",
          "danger",
          "bottom-left"
        );
    })
  }
}
</script>

<template>
  <BaseContainer>
    <form action="" @submit.prevent="sendRegisterRequest">
      <div class="cardDefaults space-y-4">
        <h1 class="font-bold text-2xl">Register as Coach</h1>
        <div class="flex flex-col space-y-1">
          <label for="_firstname" class="font-semibold">Firstname</label>
          <input
            id="_firstname"
            type="text"
            class="formInputs"
            v-model="firstName"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="_lastname" class="font-semibold">Lastname</label>
          <input
            id="_lastname"
            type="text"
            class="formInputs"
            v-model="lastName"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="_description" class="font-semibold">Description</label>
          <textarea
            id="_description"
            type="text"
            class="formInputs"
            v-model="description"
          ></textarea>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="_price" class="font-semibold">Hourly Price</label>
          <input
            id="_price"
            type="text"
            class="formInputs"
            v-model="hourlyPrice"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label for="_expertise" class="font-semibold">Expertise</label>
          <div>
            <input
              id="_frontend"
              type="checkbox"
              value="Frontend Development"
              v-model="expertise"
            />
            <label for="_frontend">Frontend Development</label>
            <br />
            <input
              id="_backend"
              type="checkbox"
              value="Backend Development"
              v-model="expertise"
            />
            <label for="_backend">Backend Development</label> <br />
            <input
              id="_career"
              type="checkbox"
              value="Career Advisory"
              v-model="expertise"
            />
            <label for="_career">Career Advisory</label>
          </div>
        </div>
        <button
          class="
            px-4
            py-2
            bg-purple-600
            text-white
            rounded-3xl
            hover:scale-[1.05]
          "
        >
          Register
        </button>
      </div>
    </form>
  </BaseContainer>
</template>


<style scoped>
.formInputs {
  @apply outline-none border-2 border-gray-400 px-3 py-1;
}

input:focus {
  @apply bg-purple-100;
}
</style>