import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";

//***************-----------COMPONENTS--------****************** */
import header from "./components/theHeader.vue"
import baseContainer from "./components/ui/baseContainer.vue"
import DetailsBtn from "./components/coach/viewDetailsBtn.vue"
import coachExpert from "./components/coach/coachExpertise.vue"
import "./input.css"
import router from "./router"

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component("theHeader",header)
app.component("details-btn",DetailsBtn)
app.component("coach-expert",coachExpert)
app.component("base-container",baseContainer)
app.mount('#app')
