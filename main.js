
var kitKat = document.querySelector('.submit-btn')

function cloneCard() {
  var cardContainer = document.querySelector('.card-container')
  var bookMarkCard = document.querySelector('.link-card')
  var cardCopy = bookMarkCard.cloneNode(true)
  cardContainer.prepend(cardCopy)
  cardDetails()
}

function cardDetails() {
  var webTitle = document.querySelector('.web-title').value
  var webURL = document.querySelector('.web-url').value
  var displayTitle = document.querySelector('.web-title-display')
  var displayURL = document.querySelector('.web-url-display')
  displayTitle.innerText = webTitle
  displayURL.innerText = webURL
}

kitKat.addEventListener('click', function() {
  cloneCard()
})
