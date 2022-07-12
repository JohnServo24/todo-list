import {addItemBox, body, list, allButtons, title, desc, date, time} from "./elements.js";
import createTodo from "./items.js";
import { activeProject, currentActive } from "./projects";

export const disableScreen = () => {
    body.style.pointerEvents = "none";
    list.style.overflow = "hidden";
}

export const enableScreen = () => {
    body.style.pointerEvents = "all";
    list.style.overflow = "scroll";
}

export const openForm = () => {
    addItemBox.style.display = "grid";
    disableScreen();
}

export const closeForm = () => {
    addItemBox.style.display = "none";
    enableScreen();
}

const hasDuplicate = title => currentActive.find(item => item.title === title);

let priority = "";
allButtons.forEach(button => {
    button.addEventListener("click", e => {
        priority = button.id;
    });
});

export default form => {
    form.addEventListener("submit", e => {
        if(hasDuplicate(title.value)) {
            alert("Task names must be different!");
    
            e.preventDefault();
            return;
        };
    
        createTodo(title.value, desc.value, date.value, time.value, priority, listItems, activeProject);
        priority = "";

        closeForm();
    });
}