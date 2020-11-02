<template>
  <modal
    name="createAccount"
    :width="460"
    :height="475"
    :scrollable="true"
    :adaptive="true"
    :clickToClose="false"
  >
    <form class="mt-1" action="#/welcome" method="">
      <div class="flex flex-col justify-between px-8 sm:px-20 pt-8">
        <h2 class="text-blue text-lg sm:text-2xl">Create an account</h2>
        <div class="form-group mt-4">
          <label for="name" class="label">
            <input
              id="name"
              class="form-control focus:outline-none"
              placeholder="Name"
              required
              type="text"
              v-model="loginData.name"
            />
            <span>Name</span>
          </label>
        </div>
        <div class="form-group mt-4 sm:mt-6">
          <label for="email" class="label">
            <input
              id="email"
              class="form-control focus:outline-none"
              placeholder="E-mail address"
              required
              type="email"
              v-model="loginData.email"
            />
            <span>E-mail address</span>
          </label>
        </div>
        <div class="form-group mt-4 sm:mt-6">
          <label for="password" class="label">
            <input
              id="password"
              class="form-control focus:outline-none"
              placeholder="Password"
              required
              type="password"
              v-model="loginData.password"
            />
            <span>Password</span>
          </label>
        </div>
      </div>
      <a
        class="text-gray-600 text-xs px-8 sm:px-20 pt-2 float-right underline"
        href=""
      >
        I already have an account
      </a>
      <div class="flex px-8 sm:px-20 mt-10">
        <input class="check-box mt-1" type="checkbox" v-model="checked" />
        <p class="font-size-14 ml-4 lg:ml-6">
          I agree to the
          <a href="" class="text-black underline">Terms and Conditions</a> and
          <a href="" class="text-black underline">Privacy Policy</a> .
        </p>
      </div>
      <button
        type="submit"
        class="bg-blue text-white w-full absolute h-20 bottom-0"
        :disabled="isDisabled"
      >
        Create account
      </button>
    </form>
  </modal>
</template>

<script>
import router from "vue-router";
export default {
  data() {
    return {
      loginData: {
        name: "",
        email: "",
        password: "",
      },
      showError: false,
      checked: false,
    };
  },
  computed: {
    isDisabled() {
      return (
        !this.loginData.name.length > 0 ||
        !this.loginData.email.length > 0 ||
        !this.loginData.password.length > 0 ||
        !this.checked === true
      );
    },
  },
  methods: {
    welcome() {
      router.push("./welcome");
    },
  },
  mounted() {
    this.$modal.show("createAccount");
  },
};
</script>

<style lang="scss" scoped>
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
