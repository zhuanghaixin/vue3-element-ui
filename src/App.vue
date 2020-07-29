<template>
  <router-view />
</template>

<script>
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("xxx", menuVisible); //set
  },
};
</script>

