<template>
  <div class="action-bar">
    <div @click="actionModal">
      <BaseIcon class="text-blue" name="timestampIcon" width="16" height="24" />
      <a>Upload files</a>
    </div>
    <div>
      <BaseIcon class="text-blue" name="guardIcon" width="24" height="24" />
      <a>Add guard</a>
    </div>
    <div>
      <BaseIcon class="text-blue" name="settingsIcon" width="24" height="24" />
      <a>Setting</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    actionModal() {
      this.$modal.show("action");
    },
  },
};
</script>

<style lang="scss" scoped>
.action-bar {
  @apply flex px-2 py-4 rounded-md;
  width: 400px;
  background-color: RGBA(226, 233, 244, 0.75);
  z-index: 100;
  > div {
    @apply flex flex-col w-1/3 items-center text-base cursor-pointer;
  }
}
</style>
