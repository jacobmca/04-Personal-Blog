document.addEventListener("DOMContentLoaded", function() {
    const userMode = localStorage.getItem("mode");

    if (userMode === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector("#toggle-switch").checked = true;
    }

    const toggleSwitch = document.querySelector("#toggle-switch");
    toggleSwitch.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    });
});