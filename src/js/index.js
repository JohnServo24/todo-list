import '../styles/main.scss';

const createItem = (title, desc, date, time, priority) => {
    const itemElement = document.createElement("div");
    const wrapperElement = document.createElement("div");
    const topElement = document.createElement("div");
    const titleElement = document.createElement("p");
    const rightElement = document.createElement("div");
    const dateElement = document.createElement("p");
    const checkElement = document.createElement("input");

    itemElement.classList.add("list__item");
    wrapperElement.classList.add("list__wrapper");
    topElement.classList.add("list__top");
    titleElement.classList.add("list__name");
    rightElement.classList.add("list__right");
    dateElement.classList.add("list__date");
    checkElement.classList.add("list__check");

    if (priority === "high") topElement.classList.add("list__top--high");
    else if (priority === "med") topElement.classList.add("list__top--med");

    checkElement.setAttribute("type", "checkbox");

    titleElement.textContent = title;
    dateElement.textContent = `${date} - ${time}`;

    const listItems = document.getElementById("listItems");

    itemElement.append(wrapperElement);
    wrapperElement.append(topElement);
    topElement.append(titleElement);
    topElement.append(rightElement);
    rightElement.append(dateElement);
    rightElement.append(checkElement);

    listItems.append(itemElement);
}


const openForm = () => {
    addItemBox.style.display = "grid";
    body.style.pointerEvents = "none";
    list.style.overflow = "hidden";
}

const closeForm = () => {
    addItemBox.style.display = "none";
    body.style.pointerEvents = "all";
    list.style.overflow = "scroll";
}

const addItemButton = document.getElementById("addButton");
const addItemBox = document.getElementById("addItem");
const addItemExit = document.getElementById("exit");
const body = document.querySelector("body");
const list = document.getElementById("list");
const form = document.getElementById("todoForm");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const time = document.getElementById("time");

const buttons = document.getElementById("prioButtons");
const allButtons = buttons.querySelectorAll("button");

let priority = "";
allButtons.forEach(button => {
    button.addEventListener("click", e => {
        priority = button.id;
    });
});

addItemButton.addEventListener("click", openForm);
addItemExit.addEventListener("click", closeForm);

form.addEventListener("submit", e => {
    createItem(title.value, desc.value, date.value, time.value, priority);

    priority = "";

    closeForm();
});
