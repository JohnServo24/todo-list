import { deleteItemFromArray } from "./projects";
import { findCurrentCard, findTitle } from "./finders";
import { listOfProjects } from "./projects";
import { listItems } from "./elements";
import { activeProject } from "./listeners";

const deleteItemDOM =  card => card.remove();

export default e => {
    const card = findCurrentCard(e);
    
    deleteItemDOM(card);
    deleteItemFromArray(listOfProjects[activeProject]);

}

export const clearAll = () => {
    while(listItems.firstChild) listItems.removeChild(listItems.firstChild);
}