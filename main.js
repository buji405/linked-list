var submitBtn = document.querySelector('.submit-btn')
var readBtn = document.querySelector('.read-btn')
var cardContainer = document.querySelector('.card-container')
var bookMarkCard = document.querySelector('.link-card')
var webTitle = document.querySelector('.web-title')
var webURL = document.querySelector('.web-url')
var tallyClass = document.querySelectorAll('.tally-class')

var cardCount = []
var skittles

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
  validation()
  if (skittles == true) {
    cloneCard()
    cardDetails()
    resetFields()
    cardCounter()
    skittles = false
    $('.card-amount').text(" " + cardCount.length + " ")
  }
})
function resetFields() {
  webTitle.value = ""
  webURL.value = ""
}
  function validation(){
    var webTitle = document.querySelector('.web-title').value
    var webURL = document.querySelector('.web-url').value
    if (webTitle == ""){
      skittles = false
      window.alert("Please enter a Title");
    } else if (webURL == "") {
      skittles = false
      window.alert("Please enter a Website URL")
    } else skittles = true
  }
$('.card-container').on('click', '.read-btn', function(){
  $(this).parent().parent().toggleClass('read');
  $(this).toggleClass('red-text')
})
$('.card-container').on('click', '.delete-btn', function(){
  $(this).parent().parent().remove();
    cardCount.shift(tallyClass)
    $('.card-amount').text(" " + cardCount.length + " ")
})

function cardCounter() {
  cardCount.unshift(tallyClass)
}
