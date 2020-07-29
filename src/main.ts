import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from  './components/Switch.vue'
import Dialog from './components/Dialog.vue'
import Tabs from  './components/Tabs.vue'
import Button from './components/Button.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes: [
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
            children:[
                { path:'switch',component:Switch},
                { path:'dialog',component:Dialog},
                { path:'button',component:Button},
                { path:'tabs',component:Tabs},
            ]
        },

    ],
})

// createApp(App).mount('#app')

const app=createApp(App)
app.use(router)
app.mount('#app')
