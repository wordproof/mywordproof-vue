<template>
  <div class="container mx-auto pb-10">
    <main>
      <!-- NotificationBar -->
      <div class="lg:flex">
        <NotificationBar
          class="bg-sand text-pink border border-solid border-sand  lg:mr-1 mt-2"
          icon="timestampIcon"
          number="0"
        >
          Timestamps left
        </NotificationBar>
        <NotificationBar
          class="bg-gray-200 text-blue border border-solid border-gray-200 mt-2"
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
        class="tabs flex items-center mt-10 mb-3 border-b border-solid border-blue"
      >
        <router-link to="/content/sites" class="mr-4 pb-3">Sites</router-link>
        <router-link to="/content/files" class="mr-4 pb-3">Files</router-link>
        <router-link
          to="/content/infringements"
          class="flex items-center text-gradient bg-gradient-to-r from-yellow to-pink  pb-3"
          >Infringements
          <BaseIcon
            class="text-pink ml-1"
            name="guardIcon"
            width="20"
            height="16"
          />
        </router-link>
      </div>
      <router-view />
    </main>
    <ActionBar class="sticky-bar" />

    <!-- Modal 'activate' -->
    <modal name="activate" :width="500" :height="500" :scrollable="true">
      <div class="flex justify-between p-8">
        <h1 class="text-black">Your subscription</h1>
        <button
          @click="closeActivateModal"
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

    <!-- Modal 'action' -->
    <modal name="action" :width="500" :height="500" :scrollable="true">
      <div class="flex justify-between p-8">
        <h1 class="text-black">Action Bar Modal</h1>
        <button
          @click="closeActionModal"
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
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar";
import ActionBar from "@/components/ActionBar.vue";

export default {
  components: {
    NotificationBar,
    ActionBar,
  },
  methods: {
    closeActionModal() {
      this.$modal.hide("action");
    },
    closeActivateModal() {
      this.$modal.hide("activate");
    },
  },
};
</script>
<style lang="scss" scoped>
.sticky-bar {
  left: 50%;
  transform: translateX(-50%);
  @apply fixed bottom-0 mb-10;
}
</style>
