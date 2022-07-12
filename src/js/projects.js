import { addProjBox } from "./elements";
import { disableScreen, enableScreen } from "./form";

export let activeProject = "Main Tasks";

export let listOfProjects = {
    "Main Tasks": [],
    "Project #1": [],
    "Project #2": [], 
    "Project #3": [],
};

export const openProject = () => {
    addProjBox.style.display = "grid";
    disableScreen();
}

export const closeProject = () => {
    addProjBox.style.display = "none";
    enableScreen();
}

export const changeActive = project => activeProject = project;
