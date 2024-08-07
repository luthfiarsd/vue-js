<template>
  <div>
    <quiz-header
      :headerInfo="headerInfo"
      :currentPercentage="currentPercentage"
    ></quiz-header>
    <quiz-content
      v-if="!showResult"
      :question="quiz.questions[currentQuestion]"
      @selectOption="onSelectOpt"
    ></quiz-content>
    <quiz-result v-else :quizLength="quiz.questions.length" :sumCorrect="sumCorrect"></quiz-result>

    <!-- <button
      @click="currentQuestion++"
      :disabled="currentQuestion === quiz.questions.length - 1"
    >
      Next
    </button> -->
  </div>
</template>

<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import QuizContent from "../components/QuizContent.vue";
import QuizResult from "../components/QuizResult.vue";
import QuizesData from "../data/quizes.json";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

const route = useRoute();
const quiz = QuizesData.find((q) => {
  return q.id === parseInt(route.params.id);
});

const currentQuestion = ref(0);
const headerInfo = computed(() =>
  ref(`${currentQuestion.value + 1}/${quiz.questions.length}`)
);

// Alternatif lain dari computed
// watch(
//   () => currentQuestion.value,
//   () => {
//     headerInfo.value = `${currentQuestion.value + 1}/${quiz.questions.length}`;
//   }
// );

const currentPercentage = computed(
  () => `${((currentQuestion.value + 1) / quiz.questions.length) * 100}%`
);

const sumCorrect = ref(0);

const onSelectOpt = (option) => {
  if (option.correct) {
    sumCorrect.value++;
  }
  if (currentQuestion.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }
  currentQuestion.value++;
};

const showResult = ref(false);
</script>

<style scoped></style>
