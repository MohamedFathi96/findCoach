<template>
  <div>
    <h1 class="text-2xl mb-4 font-bold">Register as a coach now!</h1>

    <coach-form @coach-register="coachRegister"></coach-form>
  </div>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: { CoachForm },
  methods: {
    coachRegister(coachInfo) {
      this.$store.dispatch("coaches/newCoach", coachInfo);
      this.$router.replace("/");
    },
  },
};
</script>
