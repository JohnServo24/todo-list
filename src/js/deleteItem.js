import { deleteItemFromArray } from "./projects";
import { findCurrentCard, findTitle } from "./finders";
import { mainList } from "./projects";

const deleteItemDOM =  card => card.remove();


export default e => {
    const card = findCurrentCard(e);
    const title = findTitle(card);

    deleteItemDOM(card);
    deleteItemFromArray(title);

    console.log(mainList);

}