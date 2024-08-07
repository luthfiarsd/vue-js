<template>
  <main>
    <header>
      <h1 id="title">Quizzer</h1>
      <input type="text" id="search-input" v-model.trim="searchInput" />
    </header>
    <section id="quiz-container">
      <quiz-card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></quiz-card>
    </section>
  </main>
</template>

<script setup>
import sourceQuiz from "../data/quizes.json";
import { ref, watch } from "vue";
import QuizCard from "../components/QuizCard.vue";

const quizes = ref(sourceQuiz);
const searchInput = ref("");

watch(searchInput, () => {
  quizes.value = sourceQuiz.filter((q) =>
    q.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
</script>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  background-color: #c9c9c9;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
