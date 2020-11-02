<template>
  <modal
    name="welcome"
    :width="460"
    :height="368"
    :scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <div class="flex flex-col items-center bg-blue h-full px-10 py-8">
      <svg
        width="47px"
        height="47px"
        viewBox="0 0 47 47"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Group 14</title>
        <g
          id="Registreren"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Wordproof---Register-A-Account-created"
            transform="translate(-660.000000, -420.000000)"
            fill-rule="nonzero"
          >
            <g id="Group-11" transform="translate(453.000000, 385.000000)">
              <g id="Group-14" transform="translate(207.000000, 35.000000)">
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="47"
                  height="47"
                  rx="2"
                ></rect>
                <path
                  d="M39.6614857,12.2595482 L33.48004,35.2595482 C33.3626398,35.6963721 32.9666349,36 32.5143098,36 L27.1766613,36 L27.1766613,36 L24,22.9791667 L29.015235,22.9791667 L30.2703404,28.9192708 L35.2259319,11 L38.6957555,11 C39.2480403,11 39.6957555,11.4477153 39.6957555,12 C39.6957555,12.087644 39.6842336,12.1749077 39.6614857,12.2595482 Z"
                  id="Path"
                  fill="#2000FF"
                ></path>
                <path
                  d="M21.1985748,11 L16.2409209,28.8776042 L12.4159244,11 L8.27453359,11 C7.72224884,11 7.27453359,11.4477153 7.27453359,12 C7.27453359,12.080175 7.2841755,12.160059 7.30325164,12.2379315 L12.9374794,35.2379315 C13.0470794,35.6853395 13.4481247,36 13.9087614,36 L18.4850888,36 C18.9369965,36 19.332745,35.6969214 19.4505269,35.2606326 L25.6596759,12.2606326 C25.8036192,11.7274358 25.4880671,11.1785053 24.9548703,11.0345619 C24.8698925,11.0116211 24.7822578,11 24.6942378,11 L21.1985748,11 L21.1985748,11 Z"
                  id="Path"
                  fill="#2000FF"
                  opacity="0.8"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h3 class="text-white mt-8">Hi Jelle</h3>
      <h3 class="text-white">Welcome to wordproof</h3>
      <p class="text-white text-xl">Your account has been created</p>
      <router-link class="text-white mt-10" to="/plan"
        >Get started &#8594;</router-link
      >
    </div>
  </modal>
</template>

<script>
export default {
  mounted() {
    this.$modal.show("welcome");
  },
};
</script>

<style lang="scss" scoped></style>
