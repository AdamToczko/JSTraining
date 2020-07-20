const btn = document.querySelector("button");
let count = 1;
let number = 1;

const addElement = () => {
    const square = document.createElement("li");
    square.textContent = count;
    if (number % 3 == 0) {
        number = 0;
        square.classList.add("circle");
    }
    document.body.appendChild(square);
    count += 2;
    number++;
};

btn.addEventListener("click", addElement);
