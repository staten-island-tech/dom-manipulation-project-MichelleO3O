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
  e.target.remove();
}

function clear() {
  DOMSelectors.name.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}
function createCard() {
  let name = DOMSelectors.name.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;

  insertCard(name, artist, url);
}

function insertCard(name, artist, url) {
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
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  createCard();
  const removeButton = document.querySelectorAll(`.button`);
  removeButton.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
  });
  clear();
});

// make sure to create seperate functions!!//
//use queryselectorALL and NOT onclick//
