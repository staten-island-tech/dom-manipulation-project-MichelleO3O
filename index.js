const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  submit: document.getElementById("form"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});

// make sure to create seperate functions!!//
