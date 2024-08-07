<template>
  <div class="results">
    <h4>Score</h4>
    <h1>{{ sumCorrect }}/{{ quizLength }}</h1>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps(['quizLength', 'sumCorrect']);
</script>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>