import '../styles/main.scss';
import activateForm from "./form";
import {exitProject, form, listItems, projectForm, projectTitle, sidebarList} from "./elements";
import createTodo, {createItemObj} from "./todo";
import listeners, {activeProject} from "./listeners";
import {closeProject, listOfProjects} from "./projects";
import {printItems} from "./items.js";

listeners();
activateForm(form);

createItemObj("title", "desc", "date", "time", "high", "Main Tasks");
createItemObj("title1", "desc1", "date1", "time1", "med", "Project #1");
createItemObj("title2", "desc2", "date2", "time2", "", "Project #2");
createItemObj("title3", "desc3", "date3", "time3", "", "Project #3");


printItems(listOfProjects["Main Tasks"]);
// ORGANIZE
projectForm.addEventListener("submit", e => {

    const title = projectTitle.value;
    
    const listItem = document.createElement("li");
    listItem.textContent = title;
    listItem.classList.add("sidebar__item");

    sidebarList.append(listItem);

    listOfProjects[title] = [];
    
    console.log(listOfProjects);

    // closeProject();
})