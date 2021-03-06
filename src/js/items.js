import {listOfProjects} from "./projects";
import {listItems} from "./elements";

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

export const createItemObj = (title, desc, date, time, priority, activeProject) => {
    const item = new ListItem(title, desc, date, time, priority);
    listOfProjects[activeProject].push(item);
}

export const printItems = project => {
    if(project === undefined) return 0;
    project.forEach(item => {
        createItem(item.title, item.desc, item.date, item.time, item.priority, listItems);
    })
}

export default (title, desc, date, time, priority, listItems, activeProject) => {
    createItem(title, desc, date, time, priority, listItems);
    createItemObj(title, desc, date, time, priority, activeProject);
}