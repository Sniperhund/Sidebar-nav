const darkmode = document.getElementById("darkmode");

let darkmodeToggle = false;

darkmode.addEventListener("click", () => {
    const darkModeSpan = document.getElementById("darkmode-span");
    if (darkmodeToggle) {
        document.body.classList.remove("dark-mode");
        darkModeSpan.innerHTML = "dark_mode";
        darkmodeToggle = false;
    } else {
        document.body.classList.add("dark-mode");
        darkModeSpan.innerHTML = "light_mode";
        darkmodeToggle = true;
    }
});
