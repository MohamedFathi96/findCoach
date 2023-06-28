<template>
  <div class="cart p-5">
    <h1 class="font-bold text-2xl">Find Your Coach</h1>
    <div class="flex gap-4 mt-2">
      <div>
        <input
          @change="updateMajor"
          name="major"
          class="mr-2"
          type="checkbox"
          id="frontEnd"
          value="frontend"
          v-model="selectedMajors"
        />
        <label for="frontEnd">FrontEnd</label>
      </div>
      <div>
        <input
          @change="updateMajor"
          name="major"
          class="mr-2"
          type="checkbox"
          id="backEnd"
          value="backend"
          v-model="selectedMajors"
        />
        <label for="backEnd">BackEnd</label>
      </div>
      <div>
        <input
          @change="updateMajor"
          name="major"
          class="mr-2"
          type="checkbox"
          id="fullStack"
          value="fullstack"
          v-model="selectedMajors"
        />
        <label for="fullStack">FullStack</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["filter-update"],
  data() {
    return {
      selectedMajors: [],
    };
  },
  methods: {
    updateMajor() {
      this.$emit("filter-update", this.selectedMajors);
    },
  },
};
</script>
