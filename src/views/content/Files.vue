<template
  ><!-- Infringement cards -->
  <div class="mb-20">
    <div class="flex">
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
        <div class="hidden">ewkmdekwl</div>
      </div>
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
      </div>
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
      </div>
    </div>
    <div class="flex">
      <div class="w-1/4 max-w-sm rounded overflow-hidden mt-10">
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
      </div>
      <div class="w-1/4 max-w-sm rounded overflow-hidden mt-10">
        <img
          class="w-full"
          src="../../../public/img/infringement-image-1.png"
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
      </div>
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
.card {
  @apply w-1/4 max-w-sm rounded overflow-hidden mt-10 p-2;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  }
}
</style>
