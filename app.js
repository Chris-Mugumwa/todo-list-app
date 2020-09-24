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
    //Todo Div
    const mainTodo = document.createElement('div');
    mainTodo.classList.add('todo');
    //create Li
    const mainList = document.createElement('li');
    mainList = 'hey';
    mainList.classList.add('main__items');
}