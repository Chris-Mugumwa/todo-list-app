//Selectors

const input = document.querySelector('.main__input');
const button = document.querySelector('.main__button');
const list = document.querySelector('.main__list');

//event listeners

button.addEventListener('click', todoAdd);

//functions

function todoAdd(e) {
	//preventing the form form submitting
	event.preventDefault();
	//todo Div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//create Li
	const newTodo = document.createElement('li');
	newTodo.innerText = this.value;
	newTodo.classList.add('main__item');
    todoDiv.appendChild(newTodo);
    //completed button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<ion-icon name="checkmark"></ion-icon>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //delete button
    const deleteButton = document.querySelector('button');
    deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon>';
    todoDiv.appendChild(deleteButton);
    //append
    list.appendChild(todoDiv);
}
