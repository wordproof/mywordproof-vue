<template>
  <nav class="border-b border-gray-400 border-solid">
    <div class="mx-3 px-2 my-3 py-2 flex items-center justify-between">
      <div class="w-full">
        <div class="flex items-center">
          <!-- logo -->
          <a href="/"><BaseLogo /></a>

          <!-- logo name -->
          <h3 class="hidden sm:block ml-2 md:mr-4 lg:mr-8 xl:mr-10">
            <a href="/">
              <span>Word</span>
              <span class="text-teal">Proof</span>
            </a>
          </h3>
          <!-- end of logo name -->

          <!-- links -->
          <div class="hidden md:block">
            <router-link
              v-for="(link, i) in navLinks"
              :to="link.path"
              :key="i"
              class="md:ml-1 md:px-2 lg:ml-3 lg:px-4 xl:ml-4 xl:px-6 py-4 rounded-full focus:outline-none hover:bg-gray-200 focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              {{ link.name }}
            </router-link>
          </div>
          <!-- end of links -->

          <!-- notification -->
          <Notification class="ml-4 xl:mr-10 xl:ml-8" />

          <div class="flex items-center ml-auto">
            <!-- add website button-->

            <!-- hide 'text' for md -->
            <button
              href="#"
              class="lg:hidden w-10 h-10 flex justify-center items-center mr-4 ml-4 rounded-full bg-gradient-to-r from-blue to-purple text-white focus:outline-none"
              @click="showAddWebsiteModal"
            >
              +
            </button>
            <!-- end of add website button-->

            <!-- show 'text' for lg and higher -->
            <button
              href="#"
              class="hidden lg:block lg:mr-6 lg:px-6 xl:mr-8 xl:px-6 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white focus:outline-none"
              @click="showAddWebsiteModal"
            >
              + website
            </button>
            <!-- end of add website button-->

            <!-- accessibility mode icon -->
            <svg
              class="xl:ml-10"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              @click="highContrastMode"
            >
              <title>Accessibility Mode icon</title>
              <defs>
                <circle id="path-1" cx="15" cy="15" r="15"></circle>
              </defs>
              <g
                id="Symbols"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="header/complete"
                  transform="translate(-1261.000000, -13.000000)"
                >
                  <g id="Oval-2" transform="translate(1262.000000, 14.000000)">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <use
                      id="Oval"
                      stroke="#2000FF"
                      stroke-width="2"
                      xlink:href="#path-1"
                    ></use>
                    <rect
                      id="Rectangle"
                      fill="#2000FF"
                      mask="url(#mask-2)"
                      x="-1.66666667"
                      y="-4.16666667"
                      width="17.5"
                      height="37.5"
                    ></rect>
                  </g>
                </g>
              </g>
            </svg>

            <!-- mobile menu button-->
            <div class="ml-4 md:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-blue  focus:outline-none hover:bg-blue hover:text-white transition duration-150 ease-in-out"
                @click.prevent="showTopMenu = !showTopMenu"
              >
                <!-- Icon when menu is closed. -->
                <svg
                  v-if="!showTopMenu"
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <!-- Icon when menu is open. -->
                <svg
                  v-if="showTopMenu"
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade" mode="out-in">
      <div class="block sm:hidden" v-if="showTopMenu">
        <div class="px-2 pt-2 pb-3">
          <router-link
            v-for="(link, i) in navLinks"
            :to="link.path"
            :key="i"
            @click.native="showTopMenu = !showTopMenu"
            class="block px-3 py-2 rounded-md text-base font-medium focus:outline-none hover:bg-gray-200 transition duration-150 ease-in-out"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>

    <!-- Modal 'add website' -->
    <modal
      name="addWebsite"
      :width="500"
      :height="500"
      :scrollable="true"
      :adaptive="true"
    >
      <div class="flex justify-between p-8">
        <h1>Add website modal</h1>
        <button
          @click="closeAddWebsiteModal"
          class="focus:outline-none transition duration-500 ease-in-out hover:origin-center transform hover:rotate-90"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 1L1 17" stroke="#ACACAC" stroke-width="1.5" />
            <path d="M0.999999 1L17 17" stroke="#ACACAC" stroke-width="1.5" />
          </svg>
        </button>
      </div>
    </modal>
  </nav>
</template>

<script>
import Notification from "@/components/Notification.vue";
export default {
  components: {
    Notification,
  },
  data() {
    return {
      showTopMenu: false,
      activeItem: null,
      navLinks: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Content", path: "/content" },
        { name: "Settings", path: "/settings" },
        { name: "Support", path: "/support" },
      ],
    };
  },
  methods: {
    showAddWebsiteModal() {
      this.$modal.show("addWebsite");
    },
    closeAddWebsiteModal() {
      this.$modal.hide("addWebsite");
    },
    highContrastMode() {
      const linkTags = document.querySelectorAll("head > link");
      var linkArray = Array.from(linkTags);
      const checkHighContrastCss = linkArray.filter((el) => {
        return el.href.includes("high-contrast.css");
      });
      if (checkHighContrastCss != "") {
        const highContrastLink = checkHighContrastCss[0];
        highContrastLink.parentNode.removeChild(highContrastLink);
      } else {
        document.head.innerHTML +=
          '<link rel="stylesheet" type="text/css" href="./css/high-contrast.css" />';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
