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
        if (this.active === 0) this.active = 1;
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

const hasDuplicate = title => mainList.find(item => item.title === title);

const createTodo = (title, desc, date, time, priority, listItems) => {
    createItem(title, desc, date, time, priority, listItems);
    createItemObj(title, desc, date, time, priority);
}

const findTitle = card => {
    const child = card.firstChild;
    const grandChild = child.firstChild;
    const titleElement = grandChild.firstElementChild
    const title = titleElement.textContent;

    return title;
}

const expandCard = (item, children) => {
    item.classList.add("list__item--active");
    children.forEach(child => {
        child.classList.add(`${child.classList[0]}--active`);
    });
}

const shrinkCard = (item, children) => {
    item.classList.remove("list__item--active");
    children.forEach(child => {
        child.classList.remove(`${child.classList[0]}--active`);
    });
}

const addGlobalListener = (type, selector, callback) => {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e);
    })
}

const expandShrinkToggle = e => {
    const item = findCurrentCard(e);
    const title = findTitle(item);
    const children = selectAllDivChildren(item);
    const currentItem = findCurrentItemInArray(title);

    if (currentItem[0].checkStatus() === 0) expandCard(item, children);
    else shrinkCard(item, children);

    currentItem[0].changeStatus();

    console.log(mainList);
}

const findCurrentItemInArray = title => mainList.filter(listItem => listItem.title === title);

const findCurrentCard = e => {
    let item = e.target;

    while(!item.classList.contains("list__item")) item = item.parentElement;
    
    return item;
};

const selectAllDivChildren = item => item.querySelectorAll("div");

const deleteItemFromArray = title => {mainList = mainList.filter(item => item.title != title)};

const deleteItemDOM =  card => card.remove();

const deleteItem = e => {
    const card = findCurrentCard(e);
    const title = findTitle(card);

    deleteItemDOM(card);
    deleteItemFromArray(title);
}

const checkItem = e => {
    // ADD FUNCTION TO ADD TO FINISHED TASKS LATER

    deleteItem(e);
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

addGlobalListener("click", ".list__top", expandShrinkToggle);
addGlobalListener("click", ".list__delete", deleteItem);
addGlobalListener("click", ".list__check", checkItem);

let priority = "";
allButtons.forEach(button => {
    button.addEventListener("click", e => {
        priority = button.id;
    });
});

addItemButton.addEventListener("click", openForm);
addItemExit.addEventListener("click", closeForm);

createTodo("title", "desc", "date", "time", "priority", listItems);
createTodo("title1", "desc1", "date1", "time1", "priority1", listItems);
createTodo("title2", "desc2", "date2", "time2", "priority2", listItems);
createTodo("title3", "desc3", "date3", "time3", "priority3", listItems);

form.addEventListener("submit", e => {
    if(hasDuplicate(title.value)) {
        alert("Task names must be different!");

        e.preventDefault();
        return;
    };

    createTodo(title.value, desc.value, date.value, time.value, priority, listItems);
    priority = "";

    closeForm();
});
