<template>
  <form class="cart p-4 v-flex items-stretch" @submit.prevent="registerCoach">
    <div>
      <label class="font-semibold text-lg" for="firstName">Firstname</label>
      <input
        :class="{ 'border-red-600': !firstName.isValid }"
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        type="text"
        id="firstName"
        v-model="firstName.value"
        @blur="resetValidity('firstName')"
      />
      <p v-if="!firstName.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>
    <div>
      <label class="font-semibold text-lg" for="lastName">Lastname</label>
      <input
        :class="{ 'border-red-600': !lastName.isValid }"
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        type="text"
        id="lastName"
        v-model="lastName.value"
        @blur="resetValidity('lastName')"
      />
      <p v-if="!lastName.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>
    <div>
      <label class="font-semibold text-lg" for="description">Description</label>
      <textarea
        :class="{ 'border-red-600': !description.isValid }"
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        id="description"
        cols="30"
        rows="2"
        v-model="description.value"
        @blur="resetValidity('description')"
      ></textarea>
      <p v-if="!description.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>
    <div>
      <label class="font-semibold text-lg" for="rate">Hourly Rate</label>
      <input
        :class="{ 'border-red-600': !rate.isValid }"
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        type="number"
        id="rate"
        v-model="rate.value"
        @blur="resetValidity('rate')"
      />
    </div>
    <p v-if="!rate.isValid" class="text-red-500 font-semibold">
      Incorrect Input
    </p>
    <div>
      <p>Areas of Experties</p>
      <div>
        <input
          :class="{ 'border-red-600': !majors.isValid }"
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="majors.value"
          @blur="resetValidity('majors')"
        />
        <label class="ml-2 font-semibold" for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="majors.value"
          @blur="resetValidity('majors')"
        />
        <label class="ml-2 font-semibold" for="backend">Backend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="fullstack"
          value="fullstack"
          v-model="majors.value"
          @blur="resetValidity('majors')"
        />
        <label class="ml-2 font-semibold" for="fullstack">Fullstack</label>
      </div>
      <p v-if="!majors.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>

    <p v-if="!formIsValid" class="text-red-500 font-semibold">
      Please,Fix incorrect inputs!
    </p>
    <base-button @click="registerCoach">Register</base-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formIsValid: true,
      firstName: {
        value: "",
        isValid: true,
      },
      lastName: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      majors: {
        value: [],
        isValid: true,
      },
    };
  },
  methods: {
    resetValidity(input) {
      this[input].isValid = true;
    },
    checkDataValidity() {
      this.formIsValid = true;
      if (this.firstName.value === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.majors.value.length < 1) {
        this.majors.isValid = false;
        this.formIsValid = false;
      }
    },
    registerCoach() {
      this.checkDataValidity();
      if (!this.formIsValid) return;
      const coachInfo = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        rate: this.rate.value,
        majors: this.majors.value,
      };
      this.$emit("coach-register", coachInfo);
    },
  },
};
</script>
