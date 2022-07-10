import { mainList } from "./projects";

export const findCurrentCard = e => {
    let item = e.target;

    while(!item.classList.contains("list__item")) item = item.parentElement;
    
    return item;
};

export const findCurrentItemInArray = title => mainList.filter(listItem => listItem.title === title);

export const findTitle = card => {
    const child = card.firstChild;
    const grandChild = child.firstChild;
    const titleElement = grandChild.firstElementChild
    const title = titleElement.textContent;

    return title;
}