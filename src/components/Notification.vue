<template>
  <div>
    <!-- hide 'notification icon' for md -->
    <button
      href="#"
      class="lg:hidden flex items-center w-10 h-10 justify-center rounded-full bg-sand text-pink focus:outline-none"
    >
      2
    </button>

    <!-- show 'notification icon' for lg and higher -->

    <button
      href="#"
      class="hidden lg:flex items-center lg:px-4 xl:px-6 py-2 rounded-full bg-sand text-pink focus:outline-none"
    >
      <img
        class="inline-block mr-2"
        style="width:23px; height:26px"
        src="../../public/img/notification.png"
        alt=""
      />
      <h3 class="text-xl">2</h3>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
