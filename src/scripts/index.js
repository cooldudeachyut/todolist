import '../styles/style.css';
import { differenceInDays } from 'date-fns';
import * as prompt from './prompt.js';
import * as displayList from './list.js';

const main = document.getElementById("main");
const listOptionsContainer = document.getElementById("list-options"); 
const projListContainer = document.getElementById("project-list");
const taskListContainer = document.getElementById("task-list");
let currentListOption;

class task
{
	#title;
	#description;
	#dueDate;
	#priority;
	#id;
	#status;

	constructor(title, description, dueDate, id, priority, status) {
		this.#title = title;
		this.#description = description;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#id = id;
		this.#status = false;
	}

	getTitle() {
		return this.#title;
	}

	getDescription() {
		return this.#description;
	}

	getDueDate() {
		return this.#dueDate;
	}

	getPriority() {
		return this.#priority;
	}

	getStatus() {
		return this.#status;
	}

	getID() {
		return this.#id;
	}

	setID(id) {
		this.#id = id;
	}

	changeStatus() {
		if (this.#status)
			this.#status = false;

		else
			this.#status = true;
	}
}

class project
{
	#title;
	#taskList;
	#taskIDIterator;

	constructor(title) {
		this.#title = title;
		this.#taskList = [];
		this.#taskIDIterator = 0;
	}

	getTitle() {
		return this.#title;
	}

	getTaskList() {
		return this.#taskList;
	}

	addTaskByPriority(title, description, dueDate, priority) {
		const newTask = new task(title, description, dueDate, `${this.#title}-${this.#taskIDIterator}`, priority);
		let i = 0;
	
		for (; i < this.#taskList.length; i++)
		{
			if (this.#taskList[i].getPriority() > newTask.getPriority())
				break;
		}

		if (i == this.#taskList.length)
			this.#taskList.push(newTask);

		else
			this.#taskList.splice(i, 0, newTask);

		this.#taskIDIterator++;
		return newTask;
	}

	getTask(taskID)
	{
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList[i].getID() == taskID)
				return this.#taskList[i];
		}

		console.log(`No task of ID "${taskID}" exists!`);
		return null;
	}

	deleteTask(taskID) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList[i].getID() == taskID)
			{
				this.#taskList.splice(i, 1);
				return;
			}
		}

		console.log(`No task of ID "${taskID}" exists!`);
	}

	moveTaskUp(taskID) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList.getID() == taskID)
			{
				if (i == 0)
					return;
				
				let temp = this.#taskList[i];
				this.#taskList[i] = this.#taskList[i-1];
				this.#taskList[i-1] = temp;

				let tempPriority = this.#taskList[i].getPriority();
				this.#taskList[i].setPriority(this.#taskList[i-1].getPriority());
				this.#taskList[i-1].setPriority(tempPriority);
			}
		}
	}

	moveTaskDown(taskID) {
		for (let i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList.getID() == taskID)
			{
				if (i == this.#taskList.length - 1)
					return;
				
				let temp = this.#taskList[i];
				this.#taskList[i] = this.#taskList[i+1];
				this.#taskList[i+1] = temp;

				let tempPriority = this.#taskList[i].getPriority();
				this.#taskList[i].setPriority(this.#taskList[i+1].getPriority());
				this.#taskList[i+1].setPriority(tempPriority);
			}
		}
	}
}

class projectList
{
	#currentProject;
	#projectList;

	constructor() {
		this.#projectList = [];
		this.#currentProject = null;
	}

	addProject(projectName) {
		const newProject = new project(projectName);
	
		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
				alert(`Project of title "${projectName}" already exists!`);
				return;
			}
		}

		this.#projectList.push(newProject);

		if (this.#projectList.length == 1)
			this.#currentProject = newProject;

		return newProject;
	}

	getProject(projectName)
	{
		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
				return this.#projectList[i];
		}

		console.log(`No project of title "${projectName}" exists!`);
		return null;
	}

	deleteProject(projectName) {
		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
				if (this.getCurrentProject().getTitle() == projectName)
					this.#currentProject = null;

				this.#projectList.splice(i, 1);
				return;
			}
		}

		console.log(`No project of title "${projectName}" exists!`);
	}

	getProjectList() {
		return this.#projectList;
	}

	getCurrentProject() {
		if (this.#projectList.length == 0)
		{
			console.log("Project list is empty!");
			return;
		}

		return this.#currentProject;
	}

	setCurrentProject(projectName) {

		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
				this.#currentProject = this.#projectList[i];
				return;
			}
		}

		console.log(`No project of title "${projectName}" exists!`);
	}
}

let projList = new projectList();
projList.addProject("Universal");

function calculatePriority(dueDate)
{
	let dueDateObj = new Date(dueDate.substr(0,4), dueDate.substr(5,2) - 1, dueDate.substr(8,2));
	let today = new Date();

	return differenceInDays(dueDateObj, today);
}

function addProjectToList(title)
{
	projList.addProject(title);
	projList.setCurrentProject(title);

	displayProjectSideBar();
	displayTaskList();
}

function addTaskToCurrentProject(title, description, dueDate)
{
	let priority = calculatePriority(dueDate);
	
	if (priority < 0)
	{
		alert("Cannot add task with due date before today!");
		return;
	}

	let currentProjectName = projList.getCurrentProject().getTitle();

	projList.setCurrentProject("Universal");
	let univTask = projList.getCurrentProject().addTaskByPriority(title, description, dueDate, priority);

	if (currentProjectName != "Universal")
	{
		projList.setCurrentProject(currentProjectName);
		let specificProjectTask = projList.getCurrentProject().addTaskByPriority(title, description, dueDate, priority);
		univTask.setID(specificProjectTask.getID());
	}

	displayTaskList();
}

function displayTaskPrompt()
{
	let promptWindow = prompt.createTaskPrompt();
	main.append(promptWindow[0]);
	promptWindow[1].addEventListener('submit', extractFormData);
}

function displayProjectPrompt()
{
	let promptWindow = prompt.createProjectPrompt();
	main.append(promptWindow[0]);
	promptWindow[1].addEventListener('submit', extractFormData);
}

function extractFormData(event)
{
	let formObj = {};
	let formDetails = new FormData(event.target);

	for (let key of formDetails.keys()) {
		formObj[key] = formDetails.get(key);
	}

	if (Object.keys(formObj).length == 1)
		addProjectToList(formObj['project']);

	else if (Object.keys(formObj).length == 3)
		addTaskToCurrentProject(formObj['task'], formObj['description'], formObj['date']);
}

function displayProjectSideBar()
{
	displayList.displayProjectList(projList, projListContainer, taskListContainer);

	let projNodeArray = [...projListContainer.childNodes];
	projNodeArray.forEach(element => {
		element.addEventListener('click', displayTaskList);
		element.firstChild.addEventListener('click', deleteProjectTasksFromUniv);
	});

	projNodeArray[0].firstChild.remove();
}

function displayTaskList()
{
	if (!projList.getCurrentProject())
		return;

	if (currentListOption == "every")
		displayList.displayTotalList(projList.getCurrentProject(), taskListContainer);

	else if (currentListOption == "this-week")
		displayList.displayThisWeekList(projList.getCurrentProject(), taskListContainer);
	
	else if (currentListOption == "today")
		displayList.displayTodayList(projList.getCurrentProject(), taskListContainer);

	let taskNodeArray = [...taskListContainer.childNodes];
	let taskDetailsArray;

	taskNodeArray.forEach(element => {
		taskDetailsArray = [...element.childNodes];
		taskDetailsArray[1].addEventListener('click', deleteTasksFromAllProjects);
	});
}

(function() {

	let idString, classString = 'display-option', textString;
	for (let i = 0; i < 3; i++)
	{
		if (i == 0)
		{
			idString = 'today';
			textString = 'Today';
		}

		else if (i == 1)
		{
			idString = 'this-week';
			textString = 'This Week';
		}

		else
		{
			idString = 'every';
			textString = 'Every Task';
			classString += ' selected';
		}

		let div = prompt.basicElementFactory('button', idString, classString);
		div.innerText = textString;
		listOptionsContainer.append(div);

		div.addEventListener('click', selectListOption);
	}

	currentListOption = 'every';
})();

function deleteTasksFromAllProjects(event)
{
	let parent = event.target.parentNode;
	let id = parent.firstChild.innerText;
	let targetProjectTitle = id.split('-')[0];

	if (targetProjectTitle != "Universal")
	{
		let targetProject;
	
		if (projList.getCurrentProject().getTitle() == "Universal")
			targetProject = projList.getProject(targetProjectTitle);

		else
			targetProject = projList.getProject("Universal");

		targetProject.deleteTask(id);
	}
}

function checkTaskInOtherProjects(taskID)
{
	let projListArray = projList.getProjectList();

	for (let i = 1; i < projListArray.length; i++)
	{
		if (projListArray[i].getTask(taskID))
			return true;
	}

	return false;
}

function deleteProjectTasksFromUniv()
{
	let univProject = projList.getProject("Universal");
	let univProjectListLength = projList.getProjectList().length;
	let toBeDeleted = [];

	univProject.getTaskList().forEach(element => {
		let taskID = element.getID();
		let taskProjectTitle = taskID.split('-')[0];

		if (univProjectListLength == 1)
		{
			if (taskProjectTitle != "Universal")
				toBeDeleted.push(taskID);
		}

		else if (!checkTaskInOtherProjects(taskID))
			toBeDeleted.push(taskID);
	});

	toBeDeleted.forEach(element => {
		univProject.deleteTask(element);
	});

	displayTaskList();
}

function selectListOption(event)
{
	let target = event.target;
	let optionArray = [...listOptionsContainer.childNodes];

	if (!target.classList.contains('selected'))
			target.classList.add('selected');

	else
		return;

	optionArray.forEach(element => {
		if (element.classList.contains('selected') && target.id != element.id)
			element.classList.remove('selected');
	});

	currentListOption = target.id;
	displayTaskList();
}

document.getElementById('add-task-button').addEventListener('click', displayTaskPrompt);
document.getElementById('add-project-button').addEventListener('click', displayProjectPrompt);
displayProjectSideBar();