<template>
  <modal
    name="succeed"
    :width="460"
    :minHeight="308"
    :scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <div class="flex flex-col items-center bg-blue h-full sm:px-10">
      <svg
        class="mt-8"
        width="44px"
        height="48px"
        viewBox="0 0 44 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Group 4</title>
        <g
          id="Registreren"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Wordproof---Register-B-Payment-done"
            transform="translate(-668.000000, -373.000000)"
          >
            <g id="Group-30" transform="translate(453.000000, 339.000000)">
              <g id="Group-7" transform="translate(217.000000, 34.000000)">
                <circle
                  id="Oval"
                  stroke="#FFFFFF"
                  stroke-width="3"
                  cx="20"
                  cy="26"
                  r="20"
                ></circle>
                <polygon
                  id="Path-2"
                  fill="#4418F0"
                  points="26.9167704 3 24 10.8620641 33.1308818 17 36 8.45259352"
                ></polygon>
                <path
                  d="M36.0405936,2.67516309 L23.8470126,36.6751631 C23.562007,37.4698592 22.8086771,38 21.96442,38 L15.2076985,38 L15.2076985,38 L8,21.7099359 L14.1901135,21.7099359 L19.3649919,32.4752324 L31.2470016,0 L34.158001,0 C35.2625705,1.09306965e-15 36.158001,0.8954305 36.158001,2 C36.158001,2.23013306 36.1182823,2.45853969 36.0405936,2.67516309 Z"
                  id="Path"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h2 class="text-white mt-4">Payment succeeded!</h2>
      <router-link
        class="bg-white text-blue px-4 py-2 rounded-full mt-10 focus:outline-none"
        to="./dashboard"
      >
        Add your first website
      </router-link>
      <a href="" class="mt-2 text-white opacity-75 underline">Skip for now</a>
    </div>
  </modal>
</template>

<script>
export default {
  mounted() {
    this.$modal.show("succeed");
  },
};
</script>

<style lang="scss" scoped></style>
