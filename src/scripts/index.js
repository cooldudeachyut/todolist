import '../styles/style.css';
import { differenceInDays } from 'date-fns';
import * as prompt from './prompt.js';
import * as displayList from './displaylist.js';

const main = document.getElementById("main");

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
	#taskID;

	constructor(title) {
		this.#title = title;
		this.#taskList = [];
		this.#taskID = 0;
	}

	getTitle() {
		return this.#title;
	}

	getTaskList() {
		return this.#taskList;
	}

	addTaskByPriority(taskObject) {
		let i = 0;
	
		for (i = 0; i < this.#taskList.length; i++)
		{
			if (this.#taskList[i].getPriority() > taskObject.getPriority())
				break;
		}

		if (i == this.#taskList.length)
			this.#taskList.push(taskObject);

		else
			this.#taskList.splice(i, 0, taskObject);

		this.#taskList[i].setID(`${this.#title}-${this.#taskID}`);
		this.#taskID++;
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
	}

	addProject(projectObject) {

		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectObject.getTitle())
			{
				alert(`Project of title "${projectObject.getTitle()}" already exists!`);
				return;
			}
		}

		this.#projectList.push(projectObject);

		if (this.#projectList.length == 1)
			this.#currentProject = projectObject;
	}

	removeProject(projectName) {
		for (let i = 0; i < this.#projectList.length; i++)
		{
			if (this.#projectList[i].getTitle() == projectName)
			{
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
				break;
			}
		}
	}
}

let projList = new projectList();
let univProject = new project("Universal");
projList.addProject(univProject);

function calculatePriority(dueDate)
{
	let last = new Date(dueDate.substr(0,4), dueDate.substr(5,2) - 1, dueDate.substr(8,2));
	let today = new Date();
	alert(last);

	return differenceInDays(today, last);
}

function addTaskObject(title, description, dueDate)
{
	let priority = calculatePriority(dueDate);
	alert(priority);

	const newTask = new task(title, description, dueDate, -1, priority);
	let currentProjectName = projList.getCurrentProject().getTitle();

	projList.setCurrentProject("Universal");
	projList.getCurrentProject().addTaskByPriority(newTask);

	if (currentProjectName != "Universal")
	{
		projList.setCurrentProject(currentProjectName);
		projList.getCurrentProject().addTaskByPriority(newTask);
	}
}

function addProjectObject(title)
{
	let newProject = new project(title);
	projList.addProject(newProject);
	projList.setCurrentProject(title);
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
		addProjectObject(formObj['project']);

	else if (Object.keys(formObj).length == 3)
		addTaskObject(formObj['task'], formObj['description'], formObj['date']);
}

document.getElementById('add-task-button').addEventListener('click', displayTaskPrompt);
document.getElementById('add-project-button').addEventListener('click', displayProjectPrompt);