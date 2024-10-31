function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const correctPassword = "gian";

    if (inputPassword.toLowerCase() === correctPassword) {
        ["common", "footer", "hist"].forEach(cls => {
            document.querySelector(`.${cls}`).style.display = "block";
        });
        document.getElementById("passwordPrompt").style.display = "none";
    } else {
        document.getElementById("babum").innerHTML = 'Senha errada. Tente novamente.';
    }
}


function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.querySelector(".menu-toggle"); 

    navMenu.classList.toggle("show-menu");

}

window.onload = function setBg(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("html").style.backgroundColor = "#" + randomColor;
}


