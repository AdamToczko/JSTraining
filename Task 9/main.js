const input = document.getElementById("pass");
const note = document.querySelector(".message");

const passwords = ["admin", "user", "adam"];
const messages = ["hello admin", "hello user", "hello adam"];

input.addEventListener("input", (event) => {
    note.textContent = "";
    const text = event.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            note.textContent = messages[index];
            event.target.value = "";
        }
    });
});

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
});
