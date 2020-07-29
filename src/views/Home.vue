<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个很厉害的UI框架</h2>
      <p class="actions">
        <a href>Github</a>
        <a href>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'

export default {
  name: "Home",
  components:{
    Topnav
  }
};
</script>

<style scoped lang="scss">
</style>
