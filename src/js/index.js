import '../styles/main.scss';
import activateForm from "./form";
import {form, projectForm} from "./elements";
import listeners from "./listeners";
import createProject, {listOfProjects} from "./projects";
import {printItems, createItemObj} from "./items.js";

listeners();
activateForm(form);

createItemObj("title", "desc", "date", "time", "high", "Main Tasks");
createItemObj("title1", "desc1", "date1", "time1", "med", "Project #1");
createItemObj("title2", "desc2", "date2", "time2", "", "Project #2");
createItemObj("title3", "desc3", "date3", "time3", "", "Project #3");


printItems(listOfProjects["Main Tasks"]);
createProject(projectForm);
