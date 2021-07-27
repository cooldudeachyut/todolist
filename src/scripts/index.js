import '../styles/style.css';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import * as prompts from './prompt.js';
import * as displayList from './displaylist.js';

const main = document.getElementById("main");

class listItem
{
	#title;
	#description;
	#dueDate;
	#priority;
	#status

	constructor(title, description, dueDate, priority) {
		this.#title = title,
		this.#description = description,
		this.#dueDate = dueDate,
		this.#priority = priority,
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

	changeStatus() {
		if (this.#status)
			this.#status = false;

		else
			this.#status = true;
	}
}

class list
{
	constructor() {
		this.listArray = [];
	}

	addItemByPriority(listItemObject) {
		let i = 0;

		for (i = 0; i < this.listArray.length; i++)
		{
			if (this.listArray[i].getPriority() >= listItemObject.getPriority())
			{
				i--;
				break;
			}
		}

		this.listArray.splice(i, 0, listItemObject);
	}

	get listArray() {
		return this.listArray;
	}
}

class project 
{
	#title;
	#list;

	constructor(title) {
		this.#title = title;
		this.#list = new list();
	}

	getTitle() {
		return this.#title;
	}

	getList() {
		return this.#list;
	}
}

function calculatePriority(dueDate)
{
	return 1;
}

function createListItemObject(title, description, dueDate)
{
	let priority = calculatePriority(dueDate);
	const obj = new listItem(title, description, dueDate, priority);
	return obj;
}

function displayPrompt()
{
	main.append(createPrompt());
}