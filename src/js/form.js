import {addItemBox, body, list, allButtons, title, desc, date, time} from "./elements.js";
import { mainList } from "./projects.js";
import createTodo from "./todo.js";

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

const hasDuplicate = title => mainList.find(item => item.title === title);

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
    
        createTodo(title.value, desc.value, date.value, time.value, priority, listItems);
        priority = "";
        
        console.log(mainList);
        closeForm();
    });
}