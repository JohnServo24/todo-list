import { addItemButton, addItemExit, projectButton, exitProject, sidebar, listItems as lit} from "./elements";
import {openForm, closeForm} from "./form";
import {openProject, closeProject, listOfProjects} from "./projects.js" 
import deleteItem, {clearAll} from './deleteItem';
import toggleDesc from './desc';
import {checkItem} from "./checkItem";
import {createItem} from "./todo.js";

const addGlobalListener = (type, selector, callback) => {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

export let activeProject = "";

export default () => {
    addGlobalListener("click", ".list__top", toggleDesc);
    addGlobalListener("click", ".list__delete", deleteItem);
    addGlobalListener("click", ".list__check", checkItem);
    addGlobalListener("click", ".sidebar__item", e => {
        clearAll();

        const listItems = sidebar.querySelectorAll(".sidebar__item");
        listItems.forEach(item => {
            if(item.classList.contains("sidebar__item--active")) {
                item.classList.remove("sidebar__item--active");
            }
        })

        e.target.classList.add("sidebar__item--active");

        activeProject = e.target.textContent;

        const currentProject = listOfProjects[activeProject];

        currentProject.forEach(item => {
            createItem(item.title, item.desc, item.date, item.time, item.priority, lit);
        })
        
        
    });

    addItemButton.addEventListener("click", openForm);
    addItemExit.addEventListener("click", closeForm);
    projectButton.addEventListener("click", openProject);
    exitProject.addEventListener("click", closeProject);
}