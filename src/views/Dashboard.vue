<template>
  <div class="container mx-auto pb-10">
    <header>
      <h1 class="text-blue">Hi Helle</h1>
      <p class="text-blue">
        Good to see you!
      </p>
    </header>
    <main>
      <!-- NotificationBar -->
      <NotificationBar class="my-8" />

      <!-- 'Latest timestamps' block -->
      <p class="inline-block text-blue text-base mt-6 mb-4 ">
        Latest timestamps
      </p>
      <div
        class="flex justify-between items-center border-t border-b border-solid border-light-blue pt-4 pb-3"
      >
        <div>
          <p>WordProof Files</p>
          <p class="text-xs text-gray-600">
            nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
          </p>
        </div>
        <div>
          <svg
            class="ml-8 mr-4"
            width="5px"
            height="25px"
            viewBox="0 0 5 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Group 7</title>
            <g
              id="Platform-UX"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              opacity="0.300000012"
            >
              <g
                id="WIP-Wordproof---Dashboard-(Guards-active)"
                transform="translate(-1132.000000, -421.000000)"
                fill="#2000FF"
              >
                <g id="Group-7" transform="translate(1132.000000, 421.000000)">
                  <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                  <circle id="Oval" cx="2.5" cy="12.5" r="2.5"></circle>
                  <circle id="Oval" cx="2.5" cy="22.5" r="2.5"></circle>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- 'Latest infringements' block -->
      <p
        class="inline-block text-gradient bg-gradient-to-r from-yellow to-pink text-base mt-8 mb-4"
      >
        Latest infringements
      </p>
      <div
        class="flex justify-between items-center border-t border-b border-solid border-light-blue pt-4 pb-3"
      >
        <div>
          <p>WordProof Files</p>
          <p class="text-xs text-gray-600">
            nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
          </p>
        </div>
        <div>
          <div class="bg-sand rounded-full px-4 py-1">
            <p
              class="text-base text-gradient bg-gradient-to-r from-yellow to-pink "
            >
              2 infringements
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between items-center border-b border-solid border-light-blue pt-4 pb-3"
      >
        <div>
          <p>WordProof Lightspeed App</p>
          <p class="text-xs text-gray-600">
            nos.nl/artikel/2350289-waarom-we-wel-niet-een-mondkapje-moeten-dragen.html
          </p>
        </div>
        <div>
          <div class="bg-sand rounded-full px-4 py-1">
            <p
              class="text-base text-gradient bg-gradient-to-r from-yellow to-pink "
            >
              2 infringements
            </p>
          </div>
        </div>
      </div>

      <!-- infringement cards -->
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
    </main>
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar";

export default {
  components: {
    NotificationBar,
  },
};
</script>
