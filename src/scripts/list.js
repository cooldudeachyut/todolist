import '../styles/style.css';
import { basicElementFactory } from './prompt.js';
import { isToday, isThisWeek, format } from 'date-fns';

function addHiddenID(elementNode, id)
{
	let hiddenInfo = document.createElement('div');
	hiddenInfo.innerText = id;
	hiddenInfo.setAttribute('style', 'display: none;');

	elementNode.append(hiddenInfo);
}

function createRemoveButton()
{
	let removeBtn = document.createElement('button');
	removeBtn.innerText = "X";
	removeBtn.classList.add('remove-btn');

	return removeBtn;
}

function formatDate(dateString)
{
	let dateObj = new Date(dateString.substr(0,4), dateString.substr(5,2) - 1, dateString.substr(8,2));
	return format(dateObj, 'EEE dd MMM yyyy');
}

export function displayProjectList(projListObject, projListContainer, taskListContainer)
{
	deleteList(projListContainer);
	let projList = projListObject.getProjectList();

	for (let i = 0; i < projList.length; i++)
	{
		let div = basicElementFactory('button', undefined, 'display-option');

		let removeBtn = createRemoveButton();
		removeBtn.addEventListener('click', function(event) { deleteProject(event, projListObject, taskListContainer);} );

		div.append(removeBtn);
		div.append(`${projList[i].getTitle()}`);

		if (projListObject.getCurrentProject().getTitle() == projList[i].getTitle())
			div.classList.add('selected');

		div.addEventListener('click', function(event) { selectProject(event, projListObject, projListContainer);} );

		projListContainer.append(div);
	}
}

function displayList(taskList, projObject, taskListContainer)
{
	deleteList(taskListContainer);

	taskList.forEach(element => {
		let taskContainer = basicElementFactory('div', undefined, 'task');
		addHiddenID(taskContainer, element.getID());
	
		let removeBtn = createRemoveButton();
		removeBtn.addEventListener('click', function(event) { deleteTask(event, projObject);} );
		taskContainer.append(removeBtn);

		let classString, textString;

		for (let i = 0; i < 3; i++)
		{
			if (i == 0)
			{
				classString = 'list-info';
				textString = element.getTitle();
			}

			else if (i == 1)
			{
				classString = 'list-info description-info';
				textString = element.getDescription();
			}
				
			else
			{
				classString = 'list-info';
				textString = formatDate(element.getDueDate());
			}

			let div = basicElementFactory('p', undefined, classString);
			div.innerText = textString;
			taskContainer.append(div);
		}

		taskListContainer.append(taskContainer);
	});
}

export function displayTodayList(projObject, taskListContainer)
{
	let taskList = projObject.getTaskList();
	let newList = [];

	taskList.forEach(element => {
		let dueDate = element.getDueDate();
		let dueDateObj = new Date(dueDate.substr(0,4), dueDate.substr(5,2) - 1, dueDate.substr(8,2));
		if (isToday(dueDateObj))
			newList.push(element);
	});

	displayList(newList, projObject, taskListContainer);
}

export function displayThisWeekList(projObject, taskListContainer)
{
	let taskList = projObject.getTaskList();
	let newList = [];

	taskList.forEach(element => {
		let dueDate = element.getDueDate();
		let dueDateObj = new Date(dueDate.substr(0,4), dueDate.substr(5,2) - 1, dueDate.substr(8,2));
		if (isThisWeek(dueDateObj))
			newList.push(element);
	});

	displayList(newList, projObject, taskListContainer);
}

export function displayTotalList(projObject, taskListContainer)
{
	displayList(projObject.getTaskList(), projObject, taskListContainer);
}

function selectProject(event, projListObject, projListContainer)
{
	let target = event.target;
	if (target.innerText == "X")
		return;

	let nodeArray = [...(projListContainer.childNodes)];

	if (!target.classList.contains('selected'))
		target.classList.add('selected');

	else
		return;

	nodeArray.forEach(element => {
		if (element.classList.contains('selected') && element.innerText != target.innerText)
			element.classList.remove('selected');
	});

	let correctedText = target.innerText;

	if (target.firstChild.tagName == "BUTTON")
		correctedText = target.innerText.substr(2, target.innerText.length - 2);

	projListObject.setCurrentProject(correctedText);
}

function deleteProject(event, projListObject, taskListContainer)
{
	let parent = event.target.parentNode;
	let correctedText = parent.innerText;

	if (parent.firstChild.tagName == "BUTTON")
		correctedText = parent.innerText.substr(2, parent.innerText.length - 2);

	projListObject.deleteProject(correctedText);

	if (parent.classList.contains('selected'))
		deleteList(taskListContainer);

	parent.remove();
}

function deleteTask(event, projObject)
{
	let parent = event.target.parentNode;
	let id = parent.firstChild.innerText;

	projObject.deleteTask(id);
	parent.remove();
}

function deleteList(listContainer)
{
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	    }
}
