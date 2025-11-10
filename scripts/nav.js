document.addEventListener("DOMContentLoaded", () => {
    //menu toggle hamburger
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
            menuToggle.textContent =menu.classList.contains("open") ? "x" : "☰";
        });
    } else {
        console.error("Menu error");
    }
});
