<template>
  <div class="flex justify-between w-full lg:w-1/2 px-6 py-3 mt-8">
    <div class="flex items-center">
      <BaseIcon class="mr-6" :name="icon" />
      <p class=""><slot></slot></p>
    </div>
    <div class="flex items-center">
      <h1>{{ number }}</h1>
      <button
        v-if="number < 1"
        class="text-black rounded-full bg-gradient-to-r from-yellow to-pink focus:outline-none px-6 py-2"
      >
        activate
      </button>
      <ToolTipIcon class="ml-2" />
    </div>
  </div>
</template>

<script>
import ToolTipIcon from "@/components/ToolTipIcon.vue";

export default {
  props: {
    icon: String,
    number: {
      type: String,
      default: "",
    },
  },
  components: {
    ToolTipIcon,
  },
};
</script>

<style lang="postcss" scoped></style>
