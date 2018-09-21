
      var link = document.querySelector(".search-link");

      var popup = document.querySelector(".search-wrapper");
      var form = document.querySelector(".search-form")

      var arrival = document.querySelector("#arrival")
      var leaving = document.querySelector("#leaving")

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        form.classList.toggle("search-form-show");
        popup.classList.toggle("search-wrapper-show")
        if (popup.classList.contains("search-form-error")) {
          popup.classList.remove("search-form-error")
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

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("search-form-show")) {
            popup.classList.remove("search-wrapper-show");
            form.classList.remove("search-form-show");
          }
        }
      });
