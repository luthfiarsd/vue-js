<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style>
main {
  max-width: 900px;
  margin: 0 auto;
}
</style>
