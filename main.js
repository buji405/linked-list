var submitBtn = document.querySelector ('.submit-btn');
var webTitle = document.querySelector('.web-title');
var webURL = document.querySelector('.web-url');
var displayTitle = document.querySelector('.web-title-display');
var displayURL = document.querySelector('p');
var readBtn = document.querySelector('.read-btn');
var bkMkField = document.querySelector('.card-container');


function addNewBkMk (bookmarkTitle, bookmarkURL) {
  // var linkCard = document.querySelector('.link-card')
  // bkMkField.value = bkMkField.innerText
  bkMkField.appendChild(`<article class="link-card">
    <h1 class="web-title-display">${displayTitle}</h1>
    <p>${displayURL}</p>
    <section class="button-container">
      <button class="read-btn">Read</button>
      <button class="delete-btn">Delete</button>
    </section>
  </article>`)
}

submitBtn.addEventListener('click', function(){
   var displayTitle = webTitle.value;
   var displayURL = webURL.value;
  //  displayTitle.innerText = webTitle.value;
  //  displayURL.innerText = webURL.value;
   addNewBkMk(displayTitle, displayURL)
})

readBtn.addEventListener('click', function(){
  readBtn.classList.toggle('read');
})
