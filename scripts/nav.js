document.addEventListener("DOMContentLoaded", () => {
    //menu toggle hamburger
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    } else {
        console.error("Menu error");
    }
});
