const btn = document.querySelector("button");

let font = 18;
let count = 1;

const addElement = () => {
    const listItem = document.createElement("li");
    listItem.style.fontSize = `${font}px`;
    listItem.textContent = count;
    document.body.appendChild(listItem);
    count++;
    font++;
};

btn.addEventListener("click", addElement);
