<template>
  <li class="cart v-flex p-4 font-semibold capitalize">
    <h1>{{ `${coach.firstName} ${coach.lastName}` }}</h1>
    <h3>{{ `$${coach.rate}/hour` }}</h3>
    <ul>
      <li class="inline-block" v-for="major in coach.majors" :key="major">
        <button class="btn mr-3" type="button">
          {{ major }}
        </button>
      </li>
    </ul>
    <div class="h-flex justify-end">
      <base-button :to="`/coaches/${coach.id}/contact`" link
        >Contact</base-button
      >
      <base-button mode="outline" :to="coachDetailsLink" link
        >View Details</base-button
      >
    </div>
  </li>
</template>
<script>
export default {
  props: ["coach"],

  computed: {
    coachDetailsLink() {
      return "/coaches/" + this.coach.id;
    },
  },
};
</script>
