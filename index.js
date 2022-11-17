const DOMSelectors = {
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  submit: document.getElementById("form"),
  albums: document.getElementById("album-display"),
  name: document.getElementById("title"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let name = DOMSelectors.name.value;
  console.log(name);
  DOMSelectors.albums.insertAdjacentHTML(
    "beforeend",
    `
  <div>
  
  <p> ${name} </p>
    <p> ${artist} </p>
    <img src = ${url}>
  </div>
  `
  );
  DOMSelectors.name.value = "";
  let artist = DOMSelectors.artist.value;
  DOMSelectors.albums.insertAdjacentHTML("beforeend", `<p> ${artist} </p>`);
  DOMSelectors.artist.value = "";
  let url = DOMSelectors.url.value;
  DOMSelectors.albums.insertAdjacentHTML("beforeend", `<img src = ${url}>`);
  DOMSelectors.url.value = "";
});

// make sure to create seperate functions!!//
