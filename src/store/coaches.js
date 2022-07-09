import { defineStore } from "pinia";

export const useCoachStore = defineStore("cardStore", {
  state: () => {
    return {
      isRegistered: false,
      allCoach: [],
      selectedCoachId:null,
    };
  },
  getters: {},
  actions: {
    async fetchCoaches() {
      const coaches = await (
        await fetch(
          "https://findcoach-d02ab-default-rtdb.firebaseio.com/coaches.json"
        )
      ).json();
      const coachArr = [];
      //push all coach to coachArr
      for (const item in coaches) {
        coachArr.push(coaches[item]);
      }
      return coachArr;
    },
  },
});
