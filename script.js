function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const correctPassword = "gian";

    if (inputPassword.toLowerCase() === correctPassword) {
        document.querySelector(".header").style.display = "flex";
        document.getElementById("passwordPrompt").style.display = "none";
    } else {
        document.getElementById("babum").innerHTML = 'Senha errada. Tente novamente.';
    }
}
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show-menu");
}
