<template>
  <modal
    name="plan"
    :width="1029"
    :minHeight="805"
    scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <div class="px-2 py-4 sm:px-10 sm:py-10 overflow-scroll h-full">
      <div class="sm:flex justify-between">
        <div class="flex flex-col justify-center">
          <h1 class="text-blue text-xl sm:text-3xl">Let’s make a plan!</h1>
          <p class="text-blue text-xs">
            Sorry to bother! But we’d love to know what plan we can activate for
            you.
          </p>
        </div>
        <div class="flex flex-col justify-center">
          <div class="flex items-center justify-center mt-2 sm:mt-4">
            <p class="text-xs sm:text-base">Monthly</p>
            <label class="switch mx-4">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
            <p class="text-xs sm:text-base">Anually</p>
          </div>
          <p class="text-xs text-gray-600 mt-2 text-center sm:text-right">
            prices are ex. VAT
          </p>
        </div>
      </div>
      <div class="sm:flex items-center mt-8">
        <div class="card sm:w-1/3 box-shadow relative">
          <div class="flex justify-between mt-6 mx-4 pt-10 sm:pt-1">
            <h3 class="text-blue">Hobby</h3>
            <div class="flex">
              <div class="flex">
                <p class="text-blue leading-5 opacity-75">&euro;</p>
                <p class="currency relative text-blue text-3xl mx-1">6</p>
              </div>
              <div>
                <p class="text-blue text-xs leading-3 opacity-75">25</p>
                <p class="text-blue text-xs mt-0 leading-3 opacity-75">
                  month
                </p>
              </div>
            </div>
          </div>
          <p class="text-blue text-base mx-4">3 website</p>
          <p class="text-blue text-base mt-2 mx-4">25 timestamps per month</p>
          <p class="text-blue text-base mb-6 mx-4">100 bonus timestamps</p>
          <div class="absolute bottom-0 w-full">
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Certificate text, bagde & widget
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Copyright claim tool
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Content protection
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>

            <button
              class="flex justify-center w-full bg-blue px-4 text-base text-white py-4"
              @click="selectPlan"
            >
              Select plan
            </button>
          </div>
        </div>
        <div class="card active sm:w-1/3 box-shadow relative sm:mx-4 bg-blue">
          <div class="flex justify-between mt-6 mx-4 sm:mx-4 pt-10 sm:pt-1">
            <div class="flex flex-col">
              <p class="text-white">recommended</p>
              <h3 class="text-white">Professional</h3>
            </div>

            <div class="flex mt-6">
              <div class="flex">
                <p class="text-white leading-5 opacity-75">&euro;</p>
                <p class="currency relative text-white text-3xl mx-1">6</p>
              </div>
              <div>
                <p class="text-white text-xs leading-3 opacity-75">25</p>
                <p class="text-white text-xs mt-0 leading-3 opacity-75">
                  month
                </p>
              </div>
            </div>
          </div>
          <p class="text-white text-base mx-4">5 website</p>
          <p class="text-white text-base mt-2 mx-4">100 timestamps per month</p>
          <p class="text-white text-base mb-6 mx-4">500 bonus timestamps</p>
          <div class="absolute bottom-0 w-full">
            <div
              class="flex justify-between border-t border-blue bg-white px-4"
            >
              <p class="text-base text-blue py-4">
                Certificate text, bagde & widget
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div
              class="flex justify-between border-t border-blue bg-white px-4"
            >
              <p class="text-base text-blue py-4">
                Copyright claim tool
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div
              class="flex justify-between border-t border-blue bg-white px-4"
            >
              <p class="text-base text-blue py-4">
                Content protection
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>

            <button
              class="flex justify-center w-full bg-blue px-4 text-base text-white py-4"
              @click="selectPlan"
            >
              Select plan
            </button>
          </div>
        </div>
        <div class="card sm:w-1/3 box-shadow relative">
          <div class="flex justify-between mt-6 mx-4 pt-10 sm:pt-1">
            <h3 class="text-blue">Business</h3>
            <div class="flex">
              <div class="flex">
                <p class="text-blue leading-5 opacity-75">&euro;</p>
                <p class="currency relative text-blue text-3xl mx-1">20</p>
              </div>
              <div>
                <p class="text-blue text-xs leading-3 opacity-75">83</p>
                <p class="text-blue text-xs mt-0 leading-3 opacity-75">
                  month
                </p>
              </div>
            </div>
          </div>
          <p class="text-blue text-base mx-4">10 website</p>
          <p class="text-blue text-base mt-2 mx-4">25 timestamps per month</p>
          <p class="text-blue text-base mb-6 mx-4">1000 bonus timestamps</p>
          <div class="absolute bottom-0 w-full">
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Certificate text, bagde & widget
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Copyright claim tool
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <div class="flex justify-between border-t border-blue px-4">
              <p class="text-base text-blue py-4">
                Content protection
              </p>
              <BaseIcon name="timestampIcon" width="14" class="text-teal" />
            </div>
            <button
              class="flex justify-center w-full bg-blue px-4 text-base text-white py-4"
              @click="selectPlan"
            >
              Select plan
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-between px-2 sm:px-10">
        <a href="" class="text-black">&#8592; Free account</a>
        <a href="" class="text-blue underline">View publisher plans</a>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    selectPlan() {
      event.preventDefault();
      this.$router.push({ path: "./billing" });
    },
  },
  mounted() {
    this.$modal.show("plan");
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 424px;
  border-radius: 4px;
}
.card.active {
  height: 503px;
}

.box-shadow {
  box-shadow: 0 0 12px 0 rgba(18, 0, 147, 0.1);
}
.currency {
  top: -15px;
}
// switch
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border: 2px solid #2000ff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: #2000ff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: white;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
