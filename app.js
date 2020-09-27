/*****SELECTORS*****/

const input = document.querySelector('.main__input');
const button = document.querySelector('.main__button');
const list = document.querySelector('.main__list');

/*****EVENTS*****/

button.addEventListener('click', todoAddOnClick);
input.addEventListener('keypress', todoOnKeypress);

/*****FUNCTIONS*****/

function todoAddOnClick(e) {
	//creating new elements
	const mainDiv = document.createElement('div');
	const mainItems = document.createElement('li');
	const completedButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	if (input.value !== '') {
		//setting new element content
		mainItems.innerText = input.value;
		completedButton.innerHTML =
			'<ion-icon name="checkmark-outline"></ion-icon>';
		deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon';

		//adding classes to new elements
		mainItems.classList.add('main__items');
		mainDiv.classList.add('main__div');
		completedButton.classList.add('main__icons-button');
		deleteButton.classList.add('main__icons-button');

		//appending new elements to html
		mainDiv.appendChild(mainItems);
		mainDiv.appendChild(completedButton);
		mainDiv.appendChild(deleteButton);
		list.appendChild(mainDiv);

		//deleting text from input
		input.value = '';

		//Completed Button event
		completedButton.addEventListener('click', function (e) {
			mainItems.classList.add('completed__button');
		});

		//Delete Button event
		deleteButton.addEventListener('click', function (e) {
			mainDiv.classList.add('delete__button');
		});
	} else {
		return false;
	}
}

// on keypress

function todoOnKeypress(e) {
	if (e.key === 'Enter') {
		//creating new elements
		const mainDiv = document.createElement('div');
		const mainItems = document.createElement('li');
		const completedButton = document.createElement('button');
		const deleteButton = document.createElement('button');

		if (input.value !== '') {
			//setting new element content
			mainItems.innerText = input.value;
			completedButton.innerHTML =
				'<ion-icon name="checkmark-outline"></ion-icon>';
			deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon';

			//adding classes to new elements
			mainItems.classList.add('main__items');
			mainDiv.classList.add('main__div');
			completedButton.classList.add('main__icons-button');
			deleteButton.classList.add('main__icons-button');

			//appending new elements to html
			mainDiv.appendChild(mainItems);
			mainDiv.appendChild(completedButton);
			mainDiv.appendChild(deleteButton);
			list.appendChild(mainDiv);

			//deleting text from input
			input.value = '';

			//Completed Button event
			completedButton.addEventListener('click', function (e) {
				mainItems.classList.add('completed__button');
			});

			//Delete Button event
			deleteButton.addEventListener('click', function (e) {
				mainDiv.classList.add('delete__button');
			});
		} else {
			return false;
		}
	}
}
