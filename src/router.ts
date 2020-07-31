import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import Button from "./components/ButtonDemo.vue";
import DocDemo from "./components/DocDemo.vue"


const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {path:"",component:DocDemo},
        { path: "switch", component: Switch },
        { path: "dialog", component: Dialog },
        { path: "button", component: Button },
        { path: "tabs", component: Tabs },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换");
});
