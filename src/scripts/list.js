import '../styles/style.css';
import { basicElementFactory } from './prompt.js';

export function displayProjectList(projListObject, projListContainer)
{
	deleteList(projListContainer);
	let projList = projListObject.getProjectList();

	for (let i = 0; i < projList.length; i++)
	{
		let div = basicElementFactory('button', undefined, 'display-option');

		let removeBtn = basicElementFactory('button', undefined, 'remove-btn');
		removeBtn.innerText = "X";
		removeBtn.addEventListener('click', function(event) { deleteProject(event, projListObject);} );

		if (i != 0)
			div.append(removeBtn);
		
		div.append(`${projList[i].getTitle()}`);

		if (projListObject.getCurrentProject().getTitle() == projList[i].getTitle())
			div.classList.add('selected');

		div.addEventListener('click', function(event) { selectProject(event, projListObject, projListContainer);} );

		projListContainer.append(div);
	}
}

function displayList(taskList, taskListContainer)
{
	deleteList(taskListContainer);

	taskList.forEach(element => {
		let taskContainer = basicElementFactory('div', undefined, 'task');
		let hiddenInfo = basicElementFactory('div', undefined, 'hidden-task-id');
		hiddenInfo.innerText = element.getID();
	
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
				textString = element.getDueDate();
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

	displayList(taskList, taskListContainer);
}

export function displayThisWeekList(projObject, taskListContainer)
{
	let taskList = projObject.getTaskList();

	displayList(taskList, taskListContainer);
}

export function displayTotalList(projObject, taskListContainer)
{
	displayList(projObject.getTaskList(), taskListContainer);
}

function deleteProject(event, projListObject)
{
	let parent = event.target.parentNode;
	let correctedText = parent.innerText.substr(1, parent.innerText.length - 1);
	projListObject.deleteProject(correctedText);
	parent.remove();
}

function selectProject(event, projListObject, projListContainer)
{
	if (event.target.innerText == "X")
		return;

	let nodeArray = [...(projListContainer.childNodes)];
	let target = event.target;
	let correctedText = target.innerText;

	if (target.firstChild.tagName == "BUTTON")
		correctedText = target.innerText.substr(1, target.innerText.length - 1);

	projListObject.setCurrentProject(correctedText);

	if (!target.classList.contains('selected'))
		target.classList.add('selected');

	nodeArray.forEach(element => {
		if (element.classList.contains('selected') && element.innerText != target.innerText)
			element.classList.remove('selected');
	});
}

function deleteList(listContainer)
{
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	    }
}
