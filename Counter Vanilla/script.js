const countValue = document.querySelector("#value");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", () => {
  let counter = parseInt(countValue.innerText);
  console.log(counter);
  counter++;
  countValue.innerText = counter;
});

decrement.addEventListener("click", () => {
  let counter = parseInt(countValue.innerText);
  console.log(counter);
  counter--;
  countValue.innerText = counter;
});
