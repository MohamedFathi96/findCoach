<template>
  <form @submit.prevent="sendMessage" class="cart p-4 v-flex items-stretch">
    <div>
      <label for="emal">Email</label>
      <input
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        type="email"
        id="email.value"
        v-model.trim="email.value"
        @blur="resetValidity('email')"
      />
      <p v-if="!email.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>
    <div>
      <label for="message">Message</label>
      <textarea
        class="mt-1 border border-blue-300 rounded-md block w-full outline-none px-2 py-1"
        type="email"
        id="message.value"
        v-model.trim="message.value"
        @blur="resetValidity('message')"
      />
      <p v-if="!message.isValid" class="text-red-500 font-semibold">
        Incorrect Input
      </p>
    </div>
    <base-button @click="sendMessage" mode="outline">Send</base-button>
  </form>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      isDataValid: true,
      email: {
        value: "",
        isValid: true,
      },
      message: {
        value: "",
        isValid: true,
      },
    };
  },
  methods: {
    checkFormData() {
      this.isDataValid = true;
      if (this.email.value === "") {
        this.isDataValid = false;
        this.email.isValid = false;
      }
      if (this.message.value === "") {
        this.isDataValid = false;
        this.message.isValid = false;
      }
    },
    sendMessage() {
      this.checkFormData();
      if (!this.isDataValid) {
        return;
      }
      const coachRequest = {
        coachId: this.id,
        email: this.email.value,
        message: this.message.value,
      };
      this.$store.dispatch("requests/coachRequest", coachRequest);
      this.$router.replace("/");
    },
    resetValidity(input) {
      this[input].isValid = true;
    },
  },
};
</script>
