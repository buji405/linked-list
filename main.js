
var submitBtn = document.querySelector('.submit-btn')
var readBtn = document.querySelector('.read-btn')
var cardContainer = document.querySelector('.card-container')
var bookMarkCard = document.querySelector('.link-card')

function cloneCard() {
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

submitBtn.addEventListener('click', function() {
  cloneCard()
})

$('.card-container').on('click', '.read-btn', function(){
  console.log('woow')
  $(this).parent().parent().toggleClass('read');
})
