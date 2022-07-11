import { addProjBox, listItems} from "./elements";
import { disableScreen, enableScreen } from "./form";
import {createItem} from "./todo.js";

export let mainList = [];

export let listOfProjects = {
    "Main Tasks": [{
        title: "title",
        desc: "desc",
        date: "date",
        time: "time",
        priority: "high",
        active: 0
    },
    {
        title: "title1",
        desc: "desc1",
        date: "date1",
        time: "time1",
        priority: "med",
        active: 0
    },
    {
        title: "title2",
        desc: "desc2",
        date: "date2",
        time: "time2",
        priority: "",
        active: 0
    }, {
        title: "title3",
        desc: "desc3",
        date: "date3",
        time: "time3",
        priority: "",
        active: 0
    },],
    "Project #1": [{
        title: "title",
        desc: "desc",
        date: "date",
        time: "time",
        priority: "high",
        active: 0
    },
    {
        title: "title1",
        desc: "desc1",
        date: "date1",
        time: "time1",
        priority: "med",
        active: 0
    },
    {
        title: "title2",
        desc: "desc2",
        date: "date2",
        time: "time2",
        priority: "",
        active: 0
    },],
    "Project #2": [{
        title: "title",
        desc: "desc",
        date: "date",
        time: "time",
        priority: "high",
        active: 0
    },
    {
        title: "title1",
        desc: "desc1",
        date: "date1",
        time: "time1",
        priority: "med",
        active: 0
    },], "Project #3": [{
        title: "title",
        desc: "desc",
        date: "date",
        time: "time",
        priority: "high",
        active: 0
    },]
};

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

export const deleteItemFromArray = title => { mainList = mainList.filter(item => item.title != title) };

export const openProject = () => {
    addProjBox.style.display = "grid";
    disableScreen();
}

export const closeProject = () => {
    addProjBox.style.display = "none";
    enableScreen();
}

export const printItems = project => {
    project.forEach(item => {
        createItem(item.title, item.desc, item.date, item.time, item.priority, listItems);
    })
}
