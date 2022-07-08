import { defineStore } from "pinia";

export const useCoachStore = defineStore("cardStore", {
  state: () => {
    return {
      isRegistered: false,
      allCoach:[]
    };
  },
  getters: {},
  actions: {
    async fetchCoaches(){
    const coaches =await (await fetch("https://findcoach-d02ab-default-rtdb.firebaseio.com/coaches.json")).json()
        console.log(coaches);
        
    }
  },
});
