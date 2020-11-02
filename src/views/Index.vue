<template>
  <div class="bg-light-blue h-screen">
    <!-- Modal 'createAccount' -->
    <modal
      name="createAccount"
      :width="460"
      :height="475"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
    >
      <router-view></router-view>
    </modal>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$modal.show("createAccount");
  },
};
</script>

<style lang="scss" scoped></style>
