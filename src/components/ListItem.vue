<template>
  <div
    class="flex justify-between items-center border-solid border-light-blue pt-4 pb-3"
  >
    <div>
      <slot name="header"></slot>
      <slot name="link"></slot>
    </div>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
