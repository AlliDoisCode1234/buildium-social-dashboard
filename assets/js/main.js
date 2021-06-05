// script for dark mode handling
const checkbox = document.getElementById("switch");
const body = document.getElementsByTagName("body")[0];

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

let root = document.documentElement;

root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "px");
    root.style.setProperty('--mouse-y', e.clientY + "px");
});