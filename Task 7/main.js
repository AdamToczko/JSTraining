const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (event) => {
    h1.textContent = `horizontal position: ${event.clientX} , vertical position: ${event.clientY}`;

    document.body.style.background = `rgba(${event.clientX / 3},${
        event.clientY / 3
    },${event.clientX / event.clientY}, 0.7)`;
});
