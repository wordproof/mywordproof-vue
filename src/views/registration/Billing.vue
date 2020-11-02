<template>
  <modal
    name="billing"
    :width="460"
    :height="708"
    :scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <form action="#/succeed" method="">
      <div class="flex flex-col h-full px-10 sm:px-20 py-4">
        <h1 class="text-blue mt-8">Billing details</h1>
        <p class="text-blue text-xs">
          Sorry to bother! But before we can activate your plan, we need your
          billing details.
        </p>
        <div class="flex justify-between bg-blue px-6 pt-6 mt-6 rounded">
          <h3 class="text-white">Professional</h3>
          <div class="flex">
            <div class="flex">
              <p class="text-white leading-5 opacity-75">&euro;</p>
              <p class="currency relative text-white text-3xl mx-1">10</p>
            </div>
            <div>
              <p class="text-white text-xs leading-3 opacity-75">42</p>
              <p class="text-white text-xs mt-0 leading-3 opacity-75">
                month
              </p>
            </div>
          </div>
        </div>
        <div class="form-group mt-8">
          <label for="company" class="label">
            <input
              id="company"
              class="form-control focus:outline-none"
              placeholder="Company"
              required
              type="text"
              v-model="billingData.company"
            />
            <span>Company</span>
          </label>
        </div>
        <div class="form-group mt-4">
          <label for="address" class="label">
            <input
              id="address"
              class="form-control focus:outline-none"
              placeholder="Address"
              required
              type="text"
              v-model="billingData.address"
            />
            <span>Address</span>
          </label>
        </div>
        <div class="form-group mt-4">
          <label for="postalCode" class="label">
            <input
              id="postalCode"
              class="form-control focus:outline-none"
              placeholder="Postal code"
              required
              type="text"
              v-model="billingData.postalCode"
            />
            <span>Postal code</span>
          </label>
        </div>
        <div class="form-group mt-4">
          <label for="city" class="label">
            <input
              id="city"
              class="form-control focus:outline-none"
              placeholder="City"
              required
              type="text"
              v-model="billingData.city"
            />
            <span>City</span>
          </label>
        </div>
        <div class="form-group mt-4">
          <label for="country" class="label">
            <input
              id="country"
              class="form-control focus:outline-none"
              placeholder="Country"
              required
              type="text"
              v-model="billingData.country"
            />
            <span>Country</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue text-white w-full absolute h-20 bottom-0"
        :disabled="isDisabled"
      >
        Select payment method
      </button>
    </form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      billingData: {
        company: "",
        address: "",
        postalCode: "",
        city: "",
        country: "",
      },
      showError: false,
    };
  },
  mounted() {
    this.$modal.show("billing");
  },
  computed: {
    isDisabled() {
      return (
        !this.billingData.company.length > 0 ||
        !this.billingData.address.length > 0 ||
        !this.billingData.postalCode.length > 0 ||
        !this.billingData.city.length > 0 ||
        !this.billingData.country.length > 0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.currency {
  top: -15px;
}
.form-control {
  display: block;
  width: 100%;
  height: 50px;
  color: #252525;
  border: 1px solid #252525;
  border-radius: 4px;
  padding-left: 20px;
  background: transparent !important;
}
.label {
  display: block;
  position: relative;
}
.label label,
.label > span {
  position: absolute;
  left: 0;
  top: 0;
  cursor: text;
  font-size: 12px;
  opacity: 1;
  transition: all 0.2s;
  top: -6.5px;
  left: 20px;
  z-index: 3;
  line-height: 1;
  padding: 0 1px;
}
.label label::after,
.label > span::after {
  content: " ";
  display: block;
  position: absolute;
  background: white;
  height: 2px;
  top: 50%;
  left: -0.2em;
  right: -0.2em;
  z-index: -1;
  transition: border-color 0.15s ease-in-out;
}
.label .form-control::-webkit-input-placeholder {
  opacity: 1;
  transition: all 0.3s;
}
.label .form-control:placeholder-shown:not(:focus)::-webkit-input-placeholder {
  opacity: 0;
}
.label .form-control:placeholder-shown:not(:focus) + * {
  font-size: 18px;
  top: 50%;
  color: #aea9ab;
  transform: translate(0%, -50%);
}

.form-control:focus {
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #783cdc;
}
.font-size-14 {
  font-size: 14px;
}
.check-box {
  width: 18px;
  height: 18px;
}
button {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
button:disabled {
  opacity: 0.2;
  cursor: default;
}
</style>
