<template>
  <div>
    <div class="cart p-4 v-flex">
      <h1>{{ `${selectedCoach.firstName} ${selectedCoach.lastName}` }}</h1>
      <p>{{ selectedCoach.description }}</p>
      <base-badge>{{ selectedCoach.rate }} $</base-badge>
      <button type="button" class="btn">
        <RouterLink :to="`/coaches/${id}/contact`">Contact</RouterLink>
      </button>
    </div>
    <RouterView :id="id"></RouterView>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
