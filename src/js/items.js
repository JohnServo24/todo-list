import {listItems} from "./elements";
import {createItem} from "./todo.js";

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

export const printItems = project => {
    if(project === undefined) return 0;
    project.forEach(item => {
        createItem(item.title, item.desc, item.date, item.time, item.priority, listItems);
    })
}