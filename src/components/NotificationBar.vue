<template>
  <div class="flex justify-between w-full lg:w-1/2 px-6 py-3 mt-8">
    <div class="flex items-center">
      <BaseIcon
        class="mr-6"
        :name="icon"
        :width="iconWidth"
        :height="iconHeight"
      />
      <p class=""><slot></slot></p>
    </div>
    <div class="flex items-center">
      <h1
        v-if="
          icon === 'timestampIcon' ||
            (icon === 'guardIcon' && number !== '' && number !== '0')
        "
      >
        {{ number }}
      </h1>
      <button
        v-if="(number === '' || number === '0') && icon === 'guardIcon'"
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
    iconWidth: String,
    iconHeight: String,
  },
  components: {
    ToolTipIcon,
  },
};
</script>

<style lang="postcss" scoped></style>
