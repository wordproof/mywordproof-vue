<template>
  <!-- Infringement cards -->
  <div class="h-screen">
    <div class="flex" style="height:414px">
      <!-- File upload -->
      <div class="w-1/4 p-2 mt-10">
        <div
          class="flex flex-col items-center justify-center text-center h-full max-w-sm rounded overflow-hidden bg-gray-400"
          @drop="drop"
        >
          <input
            type="file"
            multiple
            name="fields[assetsFieldHandle][]"
            id="assetsFieldHandle"
            class="w-px h-px opacity-0 overflow-hidden absolute"
            @change="onChange"
            ref="file"
            accept=".pdf,.jpg,.jpeg,.png"
          />

          <label for="assetsFieldHandle" class="block cursor-pointer">
            <div class="text-gray-600">
              Drop a file or <br />
              <span class="underline block cursor-pointer">click here</span>
              to upload your files
            </div>
          </label>
          <ul class="mt-4" v-if="this.filelist.length">
            <li
              class="flex flex-col text-sm p-1 text-base text-gray-600"
              v-for="(file, i) in filelist"
              :key="i"
            >
              {{ file.name }}
              <button
                type="button"
                @click="remove(filelist.indexOf(file))"
                class="bg-gray-200 text-gray-600 text-xs mt-2"
              >
                Remove file
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- end of File upload -->

      <!-- cards 1st row -->
      <div class="card-container mt-10">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement4.png"
            alt="Sunset in the mountains"
          />
          <div class="py-4">
            <div class="font-bold text-base mb-2">
              Liquicity Familyday 2020 artwork 1a
            </div>
            <p class="text-gray-600 text-xs">
              Liquicity Familyday 2020 final RGB.jpg
            </p>
          </div>
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container mt-10">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement3.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container mt-10">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement4.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <!-- end of cards -->
    </div>
    <div class="flex">
      <!-- cards 2e row -->
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement4.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement5.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement4.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            class="w-full"
            src="../../../public/img/infringement5.png"
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
          <div class="card-footer invisible opacity-0">
            <button>
              <BaseIcon
                class="text-blue"
                name="downloadIcon"
                width="23px"
                height="23px"
              />
            </button>

            <button>
              <BaseIcon
                class="text-blue"
                name="dotsIcon"
                width="5px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>
      <!-- end of cards -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: [],
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  @apply relative w-1/4;
}
.card {
  max-height: 414px;
  @apply absolute rounded p-2;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    z-index: 100;
    background-color: #fff;
    .card-footer {
      bottom: 16px;
      transition: visibility 0.3s linear, opacity 0.3s linear;
      @apply visible flex justify-between relative text-blue mt-8 px-1 opacity-100;
    }
  }
}
</style>
