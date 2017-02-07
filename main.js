var submitBtn = document.querySelector ('.submit-btn');
var webTitle = document.querySelector('.web-title');
var webURL = document.querySelector('.web-url');
var displayTitle = document.querySelector('.web-title-display');

var readBtn = document.querySelector('.read-btn')

submitBtn.addEventListener('click', function(){
   webTitle.value = displayTitle.innerText;
})
