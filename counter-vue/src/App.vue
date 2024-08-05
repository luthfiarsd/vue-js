<template>
  <main>
    <div>
      <h1>Counter</h1>
      <span id="value"> {{ count }} </span>
      <div>
        <button @click="increment" class="increment">+</button>
        <button
          @click="
            decrement
          "
          class="decrement"
        >
          -
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
  console.log(count);
};

const decrement = () => {
  count.value--;
  // console.log(count);
};
</script>

<style scoped>
main {
  text-align: center;
  background-color: #333333;
  padding: 10vh;
  border-radius: 10px;
}

#value {
  font-size: 50px;
}

button {
  font-size: 20px;
  margin: 20px;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  background-color: aliceblue;
}

button:hover {
  background-color: #9f9f9f;
  cursor: pointer;
}
</style>
