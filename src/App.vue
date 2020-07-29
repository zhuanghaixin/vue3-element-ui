<template>
  <div>
    导航栏 ｜
    <router-link to="/">Frank</router-link>|
    <router-link to="/xxx">Frank2</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
};
</script>
