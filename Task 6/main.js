// Part 1
let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Add 10 elements to list";
    btn.style.margin = "10px";
    document.body.appendChild(btn);

    //Part 2
    const btnClear = document.createElement("button");
    btnClear.textContent = "Clear list";
    btnClear.style.margin = "10px";
    document.body.appendChild(btnClear);
    //Part 2

    const list = document.createElement("ul");
    list.style.listStyle = "none";
    document.body.appendChild(list);
    btn.addEventListener("click", createLiElements);
    btnClear.addEventListener("click", clearList); //Part 2
};

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        //Part 2
        const listItem = document.createElement("li");
        listItem.textContent = orderElement;
        listItem.style.fontSize = `${size}px`;
        const list = document.querySelector("ul");
        list.appendChild(listItem);
        orderElement++;
        size++;
    }
    orderElement++;
    size++;
};

//Part 2
const clearList = () => {
    const list = document.querySelector("ul");
    list.innerHTML = "";
    size = 10;
    orderElement = 1;
};

init();
