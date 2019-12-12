window.$ = document.querySelector.bind(document);
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// put the background of the document in grey
document.body.style.backgroundColor = 'lightGrey';
// make an unordered list
// add three list items with the words "one, two three" in them
const list = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
// put that list into the above wrapper
myDiv.innerHTML = list;
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';
// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const pg = `<div class="paragraphs">
<p>Moh la feuille</p>
<p>Souleymane BA</p>
<p>Tony Gorez</p>
<p>Bakate BA</p>
</div>`;
// put this div before the unordered list from above
const ulElement = $('ul');
ulElement.insertAdjacentHTML('beforebegin', pg);
// add a class to the second paragraph called warning
const anotherDiv = $('.paragraphs');
anotherDiv.children[1].classList.add('warning');

// remove the first paragraph
anotherDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!
    <button class="delete" type="button">&times; Delete</button>
</p>
</div>
  `;
  return html;
}

// have that function return html that looks like this:

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Bakate', 12, 150);
cardsHTML += generatePlayerCard('Tony', 12, 150);
cardsHTML += generatePlayerCard('Souleymane', 12, 150);
cardsHTML += generatePlayerCard('Soukeyna', 12, 150);

// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
