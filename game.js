const cards = document.querySelectorAll('.memory-card');
var openedElements = [];
cards.forEach(card => {
  card.addEventListener('click', function(e) {
      flipCard(e);
  });
});

function flipCard(e) {
  var element = e.target.parentElement;
  openedElements.push(element);
  element.classList.add('flip');

  if(openedElements.length == 2){
    checkForMatch();
  }
}

// This function will be called only when openedElements array has two elements.
function checkForMatch() { 
  var firstImageName = openedElements[0].querySelectorAll('.front-face')[0].src
  var secondImageName = openedElements[1].querySelectorAll('.front-face')[0].src

  if(firstImageName == secondImageName){
    openedElements = [];
    return;
  }
  unflipCards();
}

function unflipCards() {
  var firstCard = openedElements[0];
  var secondCard = openedElements[1];
  openedElements = [];

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}
