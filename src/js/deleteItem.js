import { findCurrentCard, findTitle } from "./finders";
import { listOfProjects, activeProject } from "./projects";
import { listItems } from "./elements";

const deleteItemDOM =  card => card.remove();
const deleteItemFromArray = title => { listOfProjects[activeProject] = listOfProjects[activeProject].filter(item => item.title != title) };

export default e => {
    const card = findCurrentCard(e);
    const title = findTitle(card);


    deleteItemDOM(card);
    deleteItemFromArray(title);
}

export const clearAll = () => {
    while(listItems.firstChild) listItems.removeChild(listItems.firstChild);
}