<template>
  <div>
    <div class="v-flex items-stretch">
      <coach-filter @filter-update="updateList"></coach-filter>
      <div class="cart p-4 h-flex">
        <base-button @click="loadCoaches(true)">Refresh</base-button>
        <base-button v-if="!isCoach" mode="outline" link to="/register"
          >Register</base-button
        >
      </div>
      <div v-if="isLoading">
        <img
          class="mx-auto w-24 animate-spin"
          src="../../assets/spinner.svg"
          alt="spinner"
        />
      </div>
      <ul v-else-if="!isLoading && hasCoaches" class="v-flex items-stretch">
        <coach-item
          v-for="coach in filterdCoaches"
          :coach="coach"
          :key="coach.id"
        ></coach-item>
      </ul>
      <div
        class="mt-5 text-3xl font-semibold italic text-rose-800 text-center"
        v-else
      >
        <h1>No Coaches</h1>
      </div>
    </div>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "./CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  created() {
    this.loadCoaches();
  },
  data() {
    return {
      filterdCoaches: [],
      isLoading: false,
    };
  },
  methods: {
    async loadCoaches(forceReload = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/getCoaches", forceReload);
      } catch (error) {
        console.log(error.message);
      }
      this.filterdCoaches = this.$store.getters["coaches/coaches"];
      this.isLoading = false;
    },

    updateList(selectedMajors) {
      const coaches = this.$store.getters["coaches/coaches"];
      if (selectedMajors.length === 0) {
        this.filterdCoaches = coaches;
      } else {
        this.filterdCoaches = coaches.filter((coach) =>
          coach.majors.some((majorItem) => selectedMajors.includes(majorItem))
        );
      }
    },
  },
  computed: {
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
};
</script>
