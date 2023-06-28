<template>
  <button :class="mode" v-if="!link" type="button">
    <slot></slot>
  </button>
  <RouterLink :to="to" :class="mode" v-else>
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    mode: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
a,
button {
  padding: 5px 10px;
  border-radius: 21px;
  border: 1px solid blueviolet;
  font-weight: 500;
  letter-spacing: 1px;
}
a:hover,
button:hover {
  box-shadow: 1px 1px 10px rgb(51 49 49 / 0.4);
}
.outline {
  background-color: var(--primary-blue);
  color: aliceblue;
}
</style>
