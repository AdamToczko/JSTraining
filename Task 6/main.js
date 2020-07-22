// Part 1
let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Add 10 elements to list";
    document.body.appendChild(btn);
    const list = document.createElement("ul");
    list.style.listStyle = "none";
    document.body.appendChild(list);
    btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
    const listItem = document.createElement("li");
    listItem.textContent = orderElement;
    listItem.style.fontSize = `${size}px`;
    const list = document.querySelector("ul");
    list.appendChild(listItem);
    orderElement++;
    size++;
};

init();

//Part 2
