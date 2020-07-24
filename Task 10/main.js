const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const message = document.querySelector("h2");

let adviceArray = ["have a nap", "go running", "learn to code"];

add.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    if (input.value.length) {
        adviceArray.unshift(input.value);
        input.value = "";
    }
    console.log(adviceArray);
});

clean.addEventListener("click", (e) => {
    e.preventDefault();
    adviceArray.length = 0;
});

showAdvice.addEventListener("click", () => {
    const index = Math.floor(Math.random() * adviceArray.length);
    message.textContent = adviceArray[index];
});

showOptions.addEventListener("click", () => {
    message.textContent = adviceArray.join(" --- ");
});
