<template>
  <div class="container mx-auto pb-10">
    <main>
      <!-- NotificationBar -->
      <div class="lg:flex">
        <NotificationBar
          class="bg-sand text-pink mr-1"
          icon="timestampIcon"
          number="0"
        >
          Timestamps left
        </NotificationBar>
        <NotificationBar
          class="bg-gray-200 text-blue"
          icon="guardIcon"
          number="4/10"
        >
          Guards active
        </NotificationBar>
      </div>
      <a class="float-right text-base text-pink mt-2" href="">
        Manage subscription &#8594;
      </a>
      <!-- End of NotificationBar -->

      <div
        class="flex items-center mt-10 mb-3 border-b border-solid border-blue"
      >
        <a
          class="font-bold mr-4 border-b-2 border-solid border-blue pb-3"
          href=""
          >Sites</a
        >
        <a class="mr-4 pb-3" href="">Files</a>
        <a
          class="flex items-center text-gradient bg-gradient-to-r from-yellow to-pink  pb-3"
          href=""
          >Infringements
          <BaseIcon
            class="text-pink ml-1"
            name="guardIcon"
            width="20"
            height="16"
          />
        </a>
      </div>

      <h1 class="text-blue mt-4 mb-8">wordproof.com</h1>

      <!-- 'Latest timestamps' block -->
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
      <div
        class="flex justify-between items-center border-b border-solid border-light-blue pt-4 pb-3"
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
      <div
        class="flex justify-between items-center border-b border-solid border-light-blue pt-4 pb-3"
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
