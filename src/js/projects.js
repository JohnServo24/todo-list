import { addProjBox } from "./elements";
import { disableScreen, enableScreen } from "./form";
import {projectTitle, sidebarList, sidebar} from "./elements";
import {printItems} from "./items.js";
import {clearAll} from './deleteItem';

export let listOfProjects = {
    "Main Tasks": [],
    "Project #1": [],
    "Project #2": [], 
    "Project #3": [],
};


const removeActiveStatus = item => item.classList.remove("sidebar__item--active");

const addActiveStatus = item => item.classList.add("sidebar__item--active");

const findActiveProject = listItems => {
    listItems.forEach(item => {
        if(item.classList.contains("sidebar__item--active")) {
            removeActiveStatus(item);
        }
    })
}

export let activeProject = "Main Tasks";

export let currentActive = listOfProjects[activeProject];

export const setCurrentActive = () => currentActive = listOfProjects[activeProject];

export const openProject = () => {
    addProjBox.style.display = "grid";
    disableScreen();
}

export const closeProject = () => {
    addProjBox.style.display = "none";
    enableScreen();
}

export const changeActive = project => activeProject = project;

export const selectProject = e => {

    clearAll();

    const listItems = sidebar.querySelectorAll(".sidebar__item");

    findActiveProject(listItems);
    addActiveStatus(e.target);
    changeActive(e.target.textContent);
    setCurrentActive();

    printItems(currentActive);
    
    console.log(currentActive);
}

export default projectForm => {
    projectForm.addEventListener("submit", e => {

        const title = projectTitle.value;
        
        const listItem = document.createElement("li");
        listItem.textContent = title;
        listItem.classList.add("sidebar__item");
    
        sidebarList.append(listItem);
    
        listOfProjects[title] = [];
        
        console.log(listOfProjects);
    
        closeProject();
    })
}