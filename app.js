'use strict';
let leftImageElement = document.getElementById('left-image');
let middleImageElemnt = document.getElementById('midlle-image');
let rightImageElement = document.getElementById('right-image');
/// If we wanna to select the section itself
let section1 = document.getElementById('sec-one');

let maxAttempts = 25;
// max = counter stop the event !
let counter = 0;
// constructor to declear the name and the path  # of votes the time shown
function Proudect(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Proudect.globArr.push(this);
}
Proudect.globArr = [];
new Proudect('pen', 'img/pen.jpg');
new Proudect('pet-sweep', 'img/pet-sweep.jpg');
new Proudect('scissors', 'img/scissors.jpg');
new Proudect('shark', 'img/shark.jpg');
new Proudect('sweep', 'img/sweep.png');
new Proudect('tauntaun', 'img/tauntaun.jpg');
new Proudect('unicorn', 'img/unicorn.jpg');
new Proudect('water-can', 'img/water-can.jpg');
new Proudect('bag', 'img/bag.jpg');
new Proudect('banana', 'img/banana.jpg');
new Proudect('bathroom', 'img/bathroom.jpg');
new Proudect('boots', 'img/boots.jpg');
new Proudect('breakfast', 'img/breakfast.jpg');
new Proudect('bubblegum', 'img/bubblegum.jpg');
new Proudect('chair', 'img/chair.jpg');
new Proudect('cthulhu', 'img/cthulhu.jpg.jpg');
new Proudect('dog-duck', 'img/dog-duck.jpg');
new Proudect('dragon', 'img/dragon.jpg');
new Proudect('wine-glass', 'img/wine-glass.jpg');

// indexies of the imagies

let leftIndex = null;
let middleIndex = null;
let rightIndex = null;
function renderImages() {
  leftIndex = generateRandomIndex();
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();
  while (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex) {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
  }


  leftImageElement.src = Proudect.globArr[leftIndex].source;
  Proudect.globArr[leftIndex].shown++;

  middleImageElemnt.src = Proudect.globArr[middleIndex].source;
  Proudect.globArr[middleIndex].shown++;

  rightImageElement.src = Proudect.globArr[rightIndex].source;
  Proudect.globArr[rightIndex].shown++;

}
renderImages();

// adding event listner to the imeges seperatlly

// leftImageElement.addEventListener('click', handleClick);
// middleImageElemnt.addEventListener('click', handleClick);
// rightImageElement.addEventListener('click', handleClick);
section1.addEventListener('click', handleClick);


function handleClick(event) {
  counter++;
  if (maxAttempts >= counter) {
    if (event.target.id === 'left-image') {
      Proudect.globArr[leftIndex].votes++;

    } else if (event.target.id === 'right-image') {
      Proudect.globArr[rightIndex].votes++;


    }
    else if (event.target.id === 'midlle-image') {
      Proudect.globArr[middleIndex].votes++;

    }
    renderImages();
  } else {
    let btnElm ;
    btnElm = document.getElementById('btn');
    btnElm = addEventListener('click',handleClick);
    section1.removeEventListener('click',handleClick);
    renderList();
  }


}

function renderList() {
  const ul = document.getElementById('unList');
  let li;
  for (let i = 0; i < Proudect.globArr.length; i++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Proudect.globArr[i].name} has this number of votes ${Proudect.globArr[i].votes} and has this number of shown ${Proudect.globArr[i].shown}`;
  }
  leftImageElement.removeEventListener('click', handleClick);
  middleImageElemnt.removeEventListener('click', handleClick);
  rightImageElement.removeEventListener('click', handleClick);
}

function generateRandomIndex() {
  return Math.floor(Math.random() * Proudect.globArr.length);
}
