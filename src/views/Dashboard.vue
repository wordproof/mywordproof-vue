<template>
  <div class="container mx-auto pb-10">
    <header>
      <h1 class="text-blue">Hi Jelle</h1>
      <p class="text-blue">
        Good to see you!
      </p>
    </header>
    <main>
      <!-- NotificationBar -->
      <div class="lg:flex mt-6">
        <NotificationBar
          class="bg-gray-200 text-blue border border-solid border-gray-200 lg:mr-1 mt-2"
          icon="timestampIcon"
          number="17"
          iconWidth="16"
          iconHeight="21"
        >
          Timestamps left
        </NotificationBar>
        <NotificationBar
          class="bg-sand text-pink border border-solid border-sand mt-2"
          icon="guardIcon"
          number="0"
          iconWidth="34"
          iconHeight="34"
        >
          Guards inactive
        </NotificationBar>
      </div>
      <a class="float-right text-base text-pink mt-2" href="">
        Manage subscription &#8594;
      </a>
      <!-- End of NotificationBar -->

      <!-- 'Latest timestamps' block -->
      <p class="inline-block text-blue text-base mt-20 sm:mt10 mb-4 ">
        Latest timestamps
      </p>
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
      <ListItem class="border-t border-b">
        <p slot="header">WordProof Lightspeed App</p>
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

      <!-- 'Latest infringements' block -->
      <p
        class="inline-block text-gradient bg-gradient-to-r from-yellow to-pink text-base mt-10 mb-4"
      >
        Latest infringements
      </p>
      <ListItem class="border-t">
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
      <ListItem class="border-t">
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

      <!-- Infringement cards -->
      <div class="flex">
        <div class="w-1/4 max-w-sm rounded overflow-hidden mt-10 mr-4">
          <img
            class="w-full"
            src="../../public/img/infringement-image-1.png"
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
        </div>
        <div class="w-1/4 max-w-sm rounded overflow-hidden mt-10">
          <img
            class="w-full"
            src="../../public/img/infringement-image-1.png"
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
        </div>
      </div>

      <!-- Modal 'activate' -->
      <modal
        name="activate"
        :width="500"
        :height="500"
        :scrollable="true"
        :adaptive="true"
      >
        <div class="flex justify-between p-8">
          <h1 class="text-blue">Your subscription</h1>
          <button
            @click="closeActivateModal"
            class="focus:outline-none transition duration-500 ease-in-out hover:origin-center transform hover:rotate-90"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 1L1 17" stroke="#2000FF" stroke-width="1.5" />
              <path d="M0.999999 1L17 17" stroke="#2000FF" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </modal>
    </main>
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar";
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    NotificationBar,
    ListItem,
  },
  methods: {
    closeActivateModal() {
      this.$modal.hide("activate");
    },
  },
};
</script>
