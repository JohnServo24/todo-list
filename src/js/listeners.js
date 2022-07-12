import { addItemButton, addItemExit, projectButton, exitProject} from "./elements";
import {openForm, closeForm} from "./form";
import {openProject, closeProject, selectProject} from "./projects.js" 
import deleteItem from './deleteItem';
import toggleDesc from './desc';


const addGlobalListener = (type, selector, callback) => {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}

export default () => {
    addGlobalListener("click", ".list__top", toggleDesc);
    addGlobalListener("click", ".list__delete", deleteItem);
    addGlobalListener("click", ".list__check", deleteItem);
    addGlobalListener("click", ".sidebar__item", selectProject);

    addItemButton.addEventListener("click", openForm);
    addItemExit.addEventListener("click", closeForm);
    projectButton.addEventListener("click", openProject);
    exitProject.addEventListener("click", closeProject);
}