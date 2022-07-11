import '../styles/main.scss';
import activateForm from "./form";
import {exitProject, form, listItems, projectForm, projectTitle, sidebarList} from "./elements";
import createTodo from "./todo";
import listeners, {activeProject} from "./listeners";
import {closeProject, listOfProjects} from "./projects";


listeners();

// createTodo("title", "desc", "date", "time", "priority", listItems);
// createTodo("title1", "desc1", "date1", "time1", "priority1", listItems);
// createTodo("title2", "desc2", "date2", "time2", "priority2", listItems);
// createTodo("title3", "desc3", "date3", "time3", "priority3", listItems);

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