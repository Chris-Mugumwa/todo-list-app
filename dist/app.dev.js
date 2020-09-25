"use strict";

//Selectors
var input = document.querySelector('.main__input');
var button = document.querySelector('.main__button');
var list = document.querySelector('.main__list'); // global declarations
//event listeners

button.addEventListener('click', todoAddOnClick);
input.addEventListener('keypress', todoOnKeypress); //functions
//when plus icon is clicked

function todoAddOnClick(e) {
  // Creating the div
  var mainDiv = document.createElement('div'); //create list

  var mainItems = document.createElement('li'); //adding content to item from input and adding a class

  mainItems.innerText = input.value;
  mainItems.classList.add('main__items'); //adding li to div and adding a class to div.

  mainDiv.appendChild(mainItems);
  mainDiv.classList.add('main__div'); //adding completed and delete buttons

  var completedButton = document.createElement('button');
  var deleteButton = document.createElement('button'); // adding icons to buttons

  completedButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
  deleteButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon'; // giving icons a class

  completedButton.classList.add('main__icons-button');
  deleteButton.classList.add('main__icons-button'); //adding list and icons to div

  mainDiv.appendChild(completedButton);
  mainDiv.appendChild(deleteButton); //append div to unordered list

  list.appendChild(mainDiv); //set the input to nothing when input is added

  input.value = ''; // if you click without an input, nothing must appear
}