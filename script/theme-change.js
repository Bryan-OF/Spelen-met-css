// function colourchange() {
//     var element = document.body;
//     element.classList.toggle("theme-A");
// }

const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
const systemButton = document.querySelector("#system");


darkButton.addEventListener("click", turnDark);
lightButton.addEventListener("click", turnLight);
systemButton.addEventListener("click", turnSystem);

function turnDark() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
}

function turnLight() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
}

function turnSystem() {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
}