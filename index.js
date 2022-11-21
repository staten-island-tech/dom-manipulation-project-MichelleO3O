const DOMSelectors = {
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  submit: document.getElementById("form"),
  albums: document.getElementById("album-display"),
  name: document.getElementById("title"),
};

function removeBox(e) {
  // e.parentElement.remove();
  console.log(e.target);
  e.remove();
}

const removeButton = document.querySelectorAll(`.button`);
removeButton.forEach((button) => {
  button.remove();
});

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let name = DOMSelectors.name.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.albums.insertAdjacentHTML(
    "beforeend",
    `
  <div class = "box">
    <p class = header> ${name} </p>
    <p class = artist> ${artist} </p>
    <img class = "imgs" src = ${url}>
    <button type = "button" class = "button">Remove</button>
  </div>
  `
  );
  const cards = document.querySelectorAll(".box");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", removeBox(e));
  }
  DOMSelectors.name.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
});

// make sure to create seperate functions!!//
//use queryselectorALL and NOT onclick//
