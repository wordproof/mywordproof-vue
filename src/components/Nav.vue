<template>
  <nav class="border-b border-gray-400 border-solid mb-6">
    <div class="mx-3 px-2 my-3 py-2 flex items-center justify-between">
      <div class="w-full">
        <div class="flex items-center">
          <!-- logo -->
          <BaseLogo />

          <!-- logo name -->
          <h3 class="ml-2 md:mr-4 lg:mr-8 xl:mr-10">
            <span class="text-blue">Word</span
            ><span class="text-teal">Proof</span>
          </h3>
          <!-- end of logo name -->

          <!-- links -->
          <div class="hidden md:block">
            <router-link
              v-for="link in navLinks"
              :to="link.path"
              v-bind:key="link.id"
              class="md:ml-1 md:px-2 lg:ml-3 lg:px-4 xl:ml-4 xl:px-6 py-4 rounded-full focus:outline-none hover:bg-gray-200 focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              {{ link.name }}
            </router-link>
          </div>
          <!-- end of links -->

          <!-- notification -->
          <Notification class="ml-4 xl:mr-10 xl:ml-8" />

          <!-- add website button-->
          <div class="flex items-center ml-auto">
            <!-- hide 'text' for md -->
            <button
              href="#"
              class="lg:hidden w-10 h-10 flex justify-center items-center mr-4 rounded-full bg-gradient-to-r from-blue to-purple text-white"
            >
              +
            </button>
            <!-- end of add website button-->

            <!-- show 'text' for lg and higher -->
            <button
              href="#"
              class="hidden lg:block lg:mr-6 lg:px-6 xl:mr-8 xl:px-6 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white"
            >
              + website
            </button>
            <!-- end of add website button-->

            <!-- accessibility mode icon -->
            <BaseIcons name="accessibility" />
            <BaseIcon name="angleRight" />
            <svg
              class="xl:ml-10"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
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

            <!-- Mobile menu button-->
            <div class="ml-8 md:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-blue hover:text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <!-- Icon when menu is closed. -->
                <svg
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
                  class="hidden h-6 w-6"
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
      navLinks: [
        { id: 1, name: "Dashboard", path: "/dashboard" },
        { id: 2, name: "Content", path: "/content" },
        { id: 3, name: "Settings", path: "" },
        { id: 4, name: "Support", path: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
