<template>
  <header>
    <h4>Questions {{ headerInfo }}</h4>
    <div class="bar">
      <div class="bar-progress" :style="{width:currentPercentage}"></div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const { headerInfo, currentPercentage } = defineProps(["headerInfo", "currentPercentage"]);
</script>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

.bar {
  width: 100%;
  height: 30px;
  border: 3px solid #9e9e9e;
  border-radius: 10px;
}

.bar-progress {
  width: 0%;
  height: 100%;
  background-color: #33ff00;
}
</style>
