const DOMSelectors = {
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  submit: document.getElementById("form"),
  albums: document.getElementById("album-display"),
  name: document.getElementById("title"),
};

function removeBox(e) {
  e.preventDefault();
  e.target.parentNode.remove();
}

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
    <p> ${name} </p>
    <p> ${artist} </p>
    <img class = "imgs" src = ${url}>
    <button type = "button" class = "remove" onclick = "removeBox(event)">Remove</button>
  </div>
  `
  );
  DOMSelectors.name.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
});

// make sure to create seperate functions!!//
