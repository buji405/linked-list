
var kitKat = document.querySelector('.submit-btn')

function candyStore() {
  var jollyRancher = document.querySelector('.card-container')
  var candyCane = document.querySelector('.link-card')
  var peppermint = candyCane.cloneNode(true)
  jollyRancher.prepend(peppermint)
  iceCream()
}

function iceCream() {
  var hotFudge = document.querySelector('.web-title').value
  var bananaDip = document.querySelector('.web-url').value

  var creamSoda = document.querySelector('.web-title-display')
  var reasesPieces = document.querySelector('.web-url-display')
  console.log(reasesPieces, 'reasesPieces')

  creamSoda.innerText = hotFudge
  reasesPieces.innerText = bananaDip
}

kitKat.addEventListener('click', function() {
  candyStore()
})
