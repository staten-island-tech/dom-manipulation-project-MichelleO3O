const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  button: document.querySelector("btn"),
  display: document.getElementById("display"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});
