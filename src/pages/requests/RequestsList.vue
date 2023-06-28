<template>
  <div>
    <div v-if="isLoading">
      <img
        class="mx-auto w-24 animate-spin"
        src="../../assets/spinner.svg"
        alt="spinner"
      />
    </div>
    <div v-else class="cart p-4 v-flex items-stretch">
      <h1 class="font-bold text-3xl text-center">Requests Received</h1>
      <ul v-if="requests.length > 0" class="v-flex items-stretch">
        <li class="cart p-4" v-for="request in requests" :key="request.id">
          <h1 class="text-blue-800">{{ request.email }}</h1>
          <h1 class="font-semibold">{{ request.message }}</h1>
        </li>
      </ul>
      <h1 v-else>No Requests Recived</h1>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        console.log(error.message || "Failed to fetch Requests");
      }
      this.requests = this.$store.getters["requests/requests"];
      this.isLoading = false;
    },
  },

  data() {
    return {
      requests: [],
      isLoading: false,
    };
  },
};
</script>
