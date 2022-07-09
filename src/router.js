import { createRouter,createWebHistory } from "vue-router";

//***************-----------COMPONENTS--------****************** */
import coachList from "./components/coach/coachList.vue"
import searchCoach from "./components/coach/searchCoach.vue"
import registerCoach from "./components/coach/registerCoach.vue"
import theContacts from "./components/coach/coachContacts.vue"
const routes = [
 { path: "/", redirect:"/coaches"},
 { path: "/coaches", name:"coachPage" , components:{
    default:coachList,
    searchCoach:searchCoach
 }},
 { path: "/contacts",name:"contactPage", component:theContacts},
 {path: "/register",name:"registerPage", component:registerCoach}



]

const router =  createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'route-active',
    linkExactActiveClass:'route-exact-active'
})


export default router