import '../styles/main.scss';

const addItemButton = document.getElementById("addButton");
const addItemBox = document.getElementById("addItem");
const addItemExit = document.getElementById("exit");
const body = document.querySelector("body");
const list = document.getElementById("list");

addItemButton.addEventListener("click", e => {
    addItemBox.style.display = "grid";
    body.style.pointerEvents = "none";
    list.style.overflow = "hidden";
});

addItemExit.addEventListener("click", e => {
    addItemBox.style.display = "none";
    body.style.pointerEvents = "all";
    list.style.overflow = "scroll";
})
