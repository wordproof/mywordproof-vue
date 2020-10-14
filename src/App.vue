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

<style lang="scss">
/* purgecss start ignore */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* purgecss end ignore */
</style>
