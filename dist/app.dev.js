"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//Selectors
var input = document.querySelector('.main__input');
var button = document.querySelector('.main__button');
var list = document.querySelector('.main__list'); //event listeners

button.addEventListener('click', todoAdd); //functions 

function todoAdd(e) {
  //preventing the form form submitting
  event.preventDefault(); //Todo Div

  var mainTodo = document.createElement('div');
  mainTodo.classList.add('todo'); //create Li

  var mainList = document.createElement('li');
  mainList = (_readOnlyError("mainList"), 'hey');
  mainList.classList.add('main__items');
}