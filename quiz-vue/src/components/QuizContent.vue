<template>
  <div>
    <section id="question-container">
      <h1 class="question-title">{{ question.text }}</h1>
    </section>
    <section id="options-container">
      <div class="option" v-for="option in question.answers" :key="option.id" @click="emitSelectedOpt(option)"> 
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">{{ option.text }}</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);
const emitSelectedOpt = (option) => {
  emit("selectOption", option);
};
</script>

<style scoped>
#question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: #d7d7d7;
  border-radius: 40px;
}

.option:hover {
  background-color: #cccaca;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  border-radius: 100%;
}

.option-label:hover {
  background-color: rgb(255, 255, 255);
}

.option-value {
  font-size: 20px;
  font-weight: bold;
}
</style>
