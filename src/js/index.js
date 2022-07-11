import '../styles/main.scss';
import activateForm from "./form";
import {exitProject, form, listItems, projectForm, projectTitle, sidebarList} from "./elements";
import createTodo from "./todo";
import listeners, {activeProject} from "./listeners";
import {closeProject, listOfProjects, printItems} from "./projects";


printItems(listOfProjects["Main Tasks"]);
listeners();
activateForm(form);


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