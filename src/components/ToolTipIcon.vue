<template>
  <div class="tooltip">
    <div class="tooltip-icon ml-2">
      i
    </div>
    <span class="tooltip-text">25 new timestamps available in 21 days</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.tooltip-icon {
  height: 20px;
  width: 20px;
  font-size: 12px;
  @apply bg-white rounded-full flex items-center justify-center;
}

.tooltip .tooltip-text {
  max-width: 150px;
  @apply invisible p-4 absolute z-50 inline-block ml-4 bg-white
    text-black w-auto rounded-lg text-xs shadow;
}

.tooltip:hover .tooltip-text {
  @apply visible;
}
</style>
