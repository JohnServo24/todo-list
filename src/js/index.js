import '../styles/main.scss';

let mainList = [];

class ListItem {
    constructor(title, desc, date, time, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.time = time;
        this.priority = priority;
        this.active = 0;
    }

    changeStatus() {
        if(this.active === 0) this.active = 1;
        else this.active = 0;
    }

    checkStatus() {
        return this.active;
    }
}

const createItem = (title, desc, date, time, priority, listItems) => {
    const itemElement = document.createElement("div");
    const wrapperElement = document.createElement("div");

    const topElement = document.createElement("div");
    const titleElement = document.createElement("p");
    const rightElement = document.createElement("div");
    const dateElement = document.createElement("p");
    const checkElement = document.createElement("input");

    const descDiv = document.createElement("div");
    const descText = document.createElement("div");
    const descHeader = document.createElement("p");
    const descr = document.createElement("p");

    const deleteWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");

    itemElement.classList.add("list__item");
    wrapperElement.classList.add("list__wrapper");
    topElement.classList.add("list__top");
    titleElement.classList.add("list__name");
    rightElement.classList.add("list__right");
    dateElement.classList.add("list__date");
    checkElement.classList.add("list__check");
    descDiv.classList.add("list__desc");
    descText.classList.add("list__descText");
    deleteWrapper.classList.add("list__delete-wrapper");
    deleteButton.classList.add("list__delete");

    if (priority === "high") topElement.classList.add("list__top--high");
    else if (priority === "med") topElement.classList.add("list__top--med");

    checkElement.setAttribute("type", "checkbox");

    titleElement.textContent = title;
    dateElement.textContent = `${date} - ${time}`;
    descHeader.textContent = "Description";
    descr.textContent = desc;
    deleteButton.textContent = "Delete";

    itemElement.append(wrapperElement);
    wrapperElement.append(topElement);
    topElement.append(titleElement);
    topElement.append(rightElement);
    rightElement.append(dateElement);
    rightElement.append(checkElement);

    wrapperElement.append(descDiv);
    descDiv.append(descText);
    descText.append(descHeader);
    descText.append(descr);
    descDiv.append(deleteWrapper);
    deleteWrapper.append(deleteButton);

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

const createItemObj = (title, desc, date, time, priority) => {
    const item = new ListItem(title, desc, date, time, priority);
    mainList.push(item);
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

const listItems = document.getElementById("listItems");
const items = listItems.querySelectorAll(".list__item");

document.addEventListener("click", e => {
    if (e.target.matches('.list__top')) {
        const element = e.target;
        const firstChild = element.firstElementChild
        const title = firstChild.textContent;

        const currentItem = mainList.filter(listItem => listItem.title === title);

        const item = e.target.parentElement.parentElement;
        const children = item.querySelectorAll("div");

        if(currentItem[0].checkStatus() === 0) {
            item.classList.add("list__item--active");
            children.forEach(child => {
                child.classList.add(`${child.classList[0]}--active`);
            });
        } else {
            item.classList.remove("list__item--active");
            children.forEach(child => {
                child.classList.remove(`${child.classList[0]}--active`);
            });
        }

        currentItem[0].changeStatus();
    }
});

let priority = "";
allButtons.forEach(button => {
    button.addEventListener("click", e => {
        priority = button.id;
    });
});

addItemButton.addEventListener("click", openForm);
addItemExit.addEventListener("click", closeForm);

createItem("title.value", "desc.value", "date.value", "time.value", "priority", listItems);
createItemObj("title.value", "desc.value", "date.value", "time.value", "priority");

form.addEventListener("submit", e => {
    createItem(title.value, desc.value, date.value, time.value, priority, listItems);
    createItemObj(title.value, desc.value, date.value, time.value, priority);
    priority = "";

    closeForm();
});
