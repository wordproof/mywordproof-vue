<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Dashboard",
  components: {
    Nav,
  },
};
</script>

<style lang="scss"></style>
