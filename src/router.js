import { createRouter,createWebHistory } from "vue-router";

//***************-----------COMPONENTS--------****************** */
import coachList from "./components/coach/coachList.vue"
import searchCoach from "./components/coach/filterExpertise.vue"
import registerCoach from "./components/coach/registerCoach.vue"
import theContacts from "./components/coach/coachContacts.vue"
import theContact from "./components/coach/theContactForm.vue"

import detailsCoach from "./components/coach/detailsCoach.vue"
const routes = [
 { path: "/", redirect:"/coaches"},
 { path: "/coaches", name:"coachPage" , components:{
    default:coachList,
    searchCoach:searchCoach
 }},
 {path: "/coaches/details/:coachId",name:"detailsPage", component:detailsCoach},
 {path: "/coaches/details/:coachId/contact", name:"contactDetailPage", component:theContact},
 {path: "/contacts",name:"contactsPage", component:theContacts},
 {path: "/register",name:"registerPage", component:registerCoach},


]

const router =  createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'route-active',
    linkExactActiveClass:'route-exact-active'
})


export default router