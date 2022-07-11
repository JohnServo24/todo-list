import { addProjBox } from "./elements";

export let mainList = [];

export class ListItem {
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

export const deleteItemFromArray = title => {mainList = mainList.filter(item => item.title != title)};

export const openProject = () => {
    addProjBox.style.display = "grid";
    body.style.pointerEvents = "none";
    list.style.overflow = "hidden";
}

export const closeProject = () => {
    addProjBox.style.display = "none";
    body.style.pointerEvents = "all";
    list.style.overflow = "scroll";
}