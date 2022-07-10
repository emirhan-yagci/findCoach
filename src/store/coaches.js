import { defineStore } from "pinia";

export const useCoachStore = defineStore("cardStore", {
  state: () => {
    return {
      isRegistered: false,
      allCoach: [],
      selectedCoachId: null,
      contacts: [],
    };
  },
  getters: {},
  actions: {
    async fetchCoaches() {
      this.allCoach = [];
      const coaches = await (
        await fetch(
          "https://findcoach-d02ab-default-rtdb.firebaseio.com/coaches.json"
        )
      ).json();
      //push all coach to coachArr
      for (const item in coaches) {
        this.allCoach.push(coaches[item]);
      }
      return this.allCoach;
    },
    setContact(id,message) {
      if (this.allCoach.length == 0) {
        this.fetchCoaches().then(() => {
          let selectedCoach = this.allCoach[id];
          this.contacts.push({selectedCoach:selectedCoach,message:message,id:id});
          console.log(this.contacts);
        });
      } else {
        let selectedCoach = this.allCoach[id];
        this.contacts.push({selectedCoach:selectedCoach,message:message,id:id});
        console.log(this.contacts);
      }
    },
  },
});
