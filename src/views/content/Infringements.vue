<template>
  <div>
    <div class="flex">
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement4.png"
            alt="Sunset in the mountains"
          />
          <div class="py-4">
            <div class="font-bold text-base mb-2">
              Liquicity Familyday 2020 artwork
            </div>
            <p class="text-gray-600 text-xs">
              Liquicity Familyday 2020 final RGB.jpg
            </p>
          </div>
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement5.png"
            alt="Sunset in the mountains"
          />
          <div class="py-4">
            <div class="font-bold text-base mb-2">
              Liquicity Familyday 2020 artwork
            </div>
            <p class="text-gray-600 text-xs">
              Liquicity Familyday 2020 final RGB.jpg
            </p>
          </div>
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:flex items-center">
      <p class="text-blue sm:w-1/5">wordproof.io</p>
      <ListItem class="border-t sm:w-4/5">
        <p slot="header">WordProof Files</p>
        <p slot="link" class="text-xs text-gray-600">
          nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
        </p>
        <div slot="icon">
          <div class="bg-sand rounded-full px-4 py-1">
            <p
              class="whitespace-no-wrap text-base text-gradient bg-gradient-to-r from-yellow to-pink "
            >
              2 infringements
            </p>
          </div>
        </div>
      </ListItem>
    </div>
    <div class="sm:flex items-center">
      <p class="text-blue sm:w-1/5">thefellowhuman.com</p>
      <ListItem class="border-t sm:w-4/5">
        <p slot="header">WordProof Lightspeed App</p>
        <p slot="link" class="text-xs text-gray-600">
          nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
        </p>
        <div slot="icon">
          <div class="bg-sand rounded-full px-4 py-1">
            <p
              class="whitespace-no-wrap text-base text-gradient bg-gradient-to-r from-yellow to-pink "
            >
              2 infringements
            </p>
          </div>
        </div>
      </ListItem>
    </div>
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

<style lang="scss" scoped>
.card-container {
  @apply relative w-1/4;
}
div + .card-container {
  min-height: 414px;
}
.card {
  max-height: 414px;
  @apply absolute rounded p-2;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    z-index: 100;
    background-color: #fff;
    .card-footer {
      bottom: 16px;
      transition: visibility 0.3s linear, opacity 0.3s linear;
      @apply visible flex justify-between relative text-blue mt-8 px-1 opacity-100;
    }
  }
}
</style>
