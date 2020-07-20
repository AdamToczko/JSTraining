const btn = document.querySelector("button");
let count = 1;
let number = 1;

const addElement = () => {
    const square = document.createElement("div");
    square.textContent = count;
    if (number == 5) {
        number = 0;
        square.classList.add("circle");
    }
    document.body.appendChild(square);
    count++;
    number++;
};

btn.addEventListener("click", addElement);
