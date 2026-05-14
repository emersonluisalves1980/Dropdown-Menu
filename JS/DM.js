const profileBtn = document.getElementById("profile-menu-btn");
const dropdown = document.getElementById("profile-dropdown");

const themeToggle = document.getElementById("theme-toggle");


// Abrir / fechar menu
profileBtn.addEventListener("click", () => {

    dropdown.classList.toggle("show");

    const expanded =
        profileBtn.getAttribute("aria-expanded") === "true";

    profileBtn.setAttribute(
        "aria-expanded",
        !expanded
    );
});


// Fechar clicando fora
document.addEventListener("click", (event) => {

    if (
        !profileBtn.contains(event.target) &&
        !dropdown.contains(event.target)
    ) {

        dropdown.classList.remove("show");

        profileBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});


// Tema persistente
const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeToggle.checked = true;
}


// Alternar tema
themeToggle.addEventListener("change", () => {

    document.body.classList.toggle("dark-theme");

    const isDark =
        document.body.classList.contains("dark-theme");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );
});