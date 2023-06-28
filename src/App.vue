<template>
  <TheHeader></TheHeader>
  <div class="w-11/12 mx-auto my-7 flex flex-col gap-4">
    <RouterView v-slot="appRoute">
      <transition name="route" mode="out-in">
        <component :is="appRoute.Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap");
:root {
  --primary-blue: hsl(240, 100%, 50%);
}
body {
  font-family: "Lora", serif;
}
.cart {
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgb(51 49 49 / 0.4);
  border: 1px solid rgb(179, 167, 167);
}
.btn {
  padding: 5px 10px;
  border-radius: 21px;
  border: 1px solid blueviolet;
  font-weight: 500;
  letter-spacing: 1px;
}
.btn:hover {
  box-shadow: 1px 1px 10px rgb(51 49 49 / 0.4);
}

/* Change the width and color of the scrollbar track */
::-webkit-scrollbar {
  width: 8px;
  background-color: #dbdeeb;
}

/* Change the color and shape of the scrollbar thumb */
::-webkit-scrollbar-thumb {
  background-color: #160986;
  border-radius: 50px;
}
.route-enter-from {
  transform: translateX(-150px);
  opacity: 0.2;
}
.route-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.route-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.route-leave-to {
  transform: translateX(150);
  opacity: 0.2;
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-1n;
}
</style>
