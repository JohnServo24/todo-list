import '../styles/main.scss';
import activateForm from "./form";
import {form, listItems} from "./elements";
import createTodo from "./todo";
import listeners from "./listeners";


listeners();

createTodo("title", "desc", "date", "time", "priority", listItems);
createTodo("title1", "desc1", "date1", "time1", "priority1", listItems);
createTodo("title2", "desc2", "date2", "time2", "priority2", listItems);
createTodo("title3", "desc3", "date3", "time3", "priority3", listItems);

activateForm(form);