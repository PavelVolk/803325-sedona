document.body.classList.remove("no-js");
var search = document.querySelector(".search");

var button = search.querySelector(".search-button");
var popup = search.querySelector(".search-wrapper");
var form = search.querySelector(".search-form");

var arrival = form.querySelector("#arrival");
var leaving = form.querySelector("#leaving");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-show");
  popup.classList.toggle("search-wrapper-show");
  if (popup.classList.contains("search-form-error")) {
    popup.classList.remove("search-form-error");
  }
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !leaving.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("search-wrapper-show")) {
      popup.classList.remove("search-wrapper-show");
      form.classList.remove("search-form-show");
      if (popup.classList.contains("search-form-error")) {
        popup.classList.remove("search-form-error");
      }
    }
  }
});
