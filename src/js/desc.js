import {findCurrentCard, findTitle, findCurrentItemInArray} from './finders';
import { listOfProjects, activeProject } from './projects';

const expandCard = (item, children) => {
    item.classList.add("list__item--active");
    children.forEach(child => {
        child.classList.add(`${child.classList[0]}--active`);
    });
}

const shrinkCard = (item, children) => {
    item.classList.remove("list__item--active");
    children.forEach(child => {
        child.classList.remove(`${child.classList[0]}--active`);
    });
}

export default e => {
    const item = findCurrentCard(e);
    const title = findTitle(item);
    const children = item.querySelectorAll("div");
    const currentItem = findCurrentItemInArray(title, listOfProjects[activeProject]);

    console.log(currentItem[0]);

    if (currentItem[0].checkStatus() === 0) expandCard(item, children);
    else shrinkCard(item, children);

    currentItem[0].changeStatus();
}
