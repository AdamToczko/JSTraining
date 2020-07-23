const square = document.createElement("div");
let sqX = 0;
let sqY = 0;
square.style.left = `${sqX}px`;
square.style.top = `${sqY}px`;
square.style.backgroundColor = "green";
document.body.appendChild(square);

let move = false;
let insertSquareX;
let insertSquareY;

square.addEventListener("mousedown", (event) => {
    move = true;
    square.style.backgroundColor = "black";
    insertSquareX = event.offsetX;
    insertSquareY = event.offsetY;
});

square.addEventListener("mousemove", (event) => {
    if (move) {
        square.style.left = `${event.clientX - insertSquareX}px`;
        square.style.top = `${event.clientY - insertSquareY}px`;
    }
});

square.addEventListener("mouseup", () => {
    move = false;
    square.style.backgroundColor = "green";
});
