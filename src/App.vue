<template>
  <router-view />
</template>

<script>
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const menuVisible = ref(width <= 500 ? false : true);
    provide("xxx", menuVisible); //set
    router.afterEach(() => {
      if(width<=500){
        menuVisible.value = false;
      }
    });
  },
};
</script>

