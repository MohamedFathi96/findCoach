<template>
  <nav
    class="py-9 px-5 bg-blue-950 text-white flex justify-between items-center"
  >
    <h1 class="text-3xl italic">
      <RouterLink to="/">Find a Coach</RouterLink>
    </h1>
    <ul class="flex gap-5">
      <li>
        <RouterLink class="px-4 py-3" to="/coaches">All Coaches</RouterLink>
      </li>
      <li>
        <RouterLink class="px-4 py-3" to="/requests">Requests</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.active {
  border: 1px solid #fff;
  border-radius: 5px;
}
</style>
