const bar = document.createElement("div");
document.body.appendChild(bar);

let grow = true;
let size = 10;
bar.style.height = `${size}px`;

window.addEventListener("scroll", function () {
    if (size >= window.innerHeight / 2) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        bar.classList.remove("red");
        bar.style.height = `${size}px`;
    } else {
        size -= 5;
        bar.classList.add("red");
        bar.style.height = `${size}px`;
    }
});
