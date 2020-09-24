"use strict";

//Selectors
var input = document.querySelector('.main__input');
var button = document.querySelector('.main__button');
var list = document.querySelector('.main__list'); //event listeners

button.addEventListener('click', todoAdd); //functions

function todoAdd(e) {
  //preventing the form form submitting
  event.preventDefault(); //todo Div

  var todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); //create Li

  var newTodo = document.createElement('li');
  newTodo.innerText = this.value;
  newTodo.classList.add('main__item');
  todoDiv.appendChild(newTodo); //completed button

  var completeButton = document.createElement('button');
  completeButton.innerHTML = '<ion-icon name="checkmark"></ion-icon>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton); //delete button

  var deleteButton = document.querySelector('button');
  deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon>';
  todoDiv.appendChild(deleteButton); //append

  list.appendChild(todoDiv);
}