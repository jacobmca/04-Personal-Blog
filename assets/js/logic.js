document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector("#toggle-switch");

    toggleSwitch.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
    });
});