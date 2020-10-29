<template>
  <div class="mb-20">
    <div class="flex justify-between mt-4 mb-8">
      <div class="flex items-center">
        <h1 class="text-blue text-lg lg:text-3xl">wordproof.com</h1>
        <a href="">
          <svg
            class="ml-2 mt-3"
            width="12px"
            height="7px"
            viewBox="0 0 12 7"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#2000FF"
          >
            <path
              transform="translate(-468.000000, -325.000000)"
              d="M478.634547 325 474 329.386274 469.365453 325 468 326.297703 474 332 480 326.297703 Z"
            ></path>
          </svg>
        </a>
        <a href="">
          <BaseIcon
            name="searchIcon"
            width="33px"
            height="24px"
            class="text-blue ml-8"
          />
        </a>
      </div>
      <div class="flex items-center">
        <img src="../../../public/img/wordpress-icon.png" alt="" />
        <BaseIcon
          slot="icon"
          class="ml-8 mr-4 text-blue"
          name="dotsIcon"
          width="5px"
          height="25px"
        />
      </div>
    </div>
    <!-- 'Latest timestamps' block -->
    <ListItem class="border-t">
      <p slot="header">WordProof Files</p>
      <p slot="link" class="text-xs text-gray-600">
        nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
      </p>
      <BaseIcon
        slot="icon"
        class="ml-8 mr-4 text-blue opacity-30"
        name="dotsIcon"
        width="5px"
        height="25px"
      />
    </ListItem>
    <ListItem class="border-t">
      <p slot="header">WordProof Files</p>
      <p slot="link" class="text-xs text-gray-600">
        nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
      </p>
      <BaseIcon
        slot="icon"
        class="ml-8 mr-4 text-blue opacity-30"
        name="dotsIcon"
        width="5px"
        height="25px"
      /> </ListItem
    ><ListItem class="border-t">
      <p slot="header">WordProof Files</p>
      <p slot="link" class="text-xs text-gray-600">
        nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
      </p>
      <BaseIcon
        slot="icon"
        class="ml-8 mr-4 text-blue opacity-30"
        name="dotsIcon"
        width="5px"
        height="25px"
      />
    </ListItem>
    <ListItem class="border-t border-b">
      <p slot="header">WordProof Files</p>
      <p slot="link" class="text-xs text-gray-600">
        nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
      </p>
      <BaseIcon
        slot="icon"
        class="ml-8 mr-4 text-blue opacity-30"
        name="dotsIcon"
        width="5px"
        height="25px"
      />
    </ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped></style>
