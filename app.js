//Selectors

const input = document.querySelector('.main__input');
const button = document.querySelector('.main__button');
const list = document.querySelector('.main__list');

// global declarations

//event listeners

button.addEventListener('click', todoAddOnClick);
input.addEventListener('keypress', todoOnKeypress);

//functions

//when plus icon is clicked
function todoAddOnClick(e) {
	// Creating the div
	const mainDiv = document.createElement('div');
	//create list
	const mainItems = document.createElement('li');
	//adding content to item from input and adding a class
	mainItems.innerText = input.value;
	mainItems.classList.add('main__items');
	//adding li to div and adding a class to div.
	mainDiv.appendChild(mainItems);
	mainDiv.classList.add('main__div');
	//adding completed and delete buttons
	const completedButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	// adding icons to buttons
	completedButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
	deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon';
	// giving icons a class
	completedButton.classList.add('main__icons-button');
	deleteButton.classList.add('main__icons-button');
	//adding list and icons to div
	mainDiv.appendChild(completedButton);
	mainDiv.appendChild(deleteButton);
	//append div to unordered list
	list.appendChild(mainDiv);
	//set the input to nothing when input is added
	input.value = '';

	//Completed Button
	completedButton.addEventListener('click', function (e) {
		console.log('hello');
		mainItems.classList.add('completed__button');
	});

	//Delete Button
	deleteButton.addEventListener('click', function (e) {
		console.log('hello');
		mainDiv.classList.add('delete__button');
	});
}

// on keypress

function todoOnKeypress(e) {
	if (e.key === 'Enter') {
		// Creating the div
		const mainDiv = document.createElement('div');
		//create list
		const mainItems = document.createElement('li');
		//adding content to item from input and adding a class
		mainItems.innerText = input.value;
		mainItems.classList.add('main__items');
		//adding li to div and adding a class to div.
		mainDiv.appendChild(mainItems);
		mainDiv.classList.add('main__div');
		//adding completed and delete buttons
		const completedButton = document.createElement('button');
		const deleteButton = document.createElement('button');
		// adding icons to buttons
		completedButton.innerHTML =
			'<ion-icon name="checkmark-outline"></ion-icon>';
		deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon';
		// giving icons a class
		completedButton.classList.add('main__icons-button');
		deleteButton.classList.add('main__icons-button');
		//adding list and icons to div
		mainDiv.appendChild(completedButton);
		mainDiv.appendChild(deleteButton);
		//append div to unordered list
		list.appendChild(mainDiv);
		//set the input to nothing when input is added
		input.value = '';

		//Completed Button
		completedButton.addEventListener('click', function (e) {
			mainItems.classList.add('completed__button');
		});

		//Delete Button
		deleteButton.addEventListener('click', function (e) {
			mainDiv.classList.add('delete__button');
		});
	}
}

