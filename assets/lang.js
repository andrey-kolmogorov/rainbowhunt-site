// Rainbow Hunt site language: English or German.
// Every page carries both languages side by side: <span data-lang="en"> and <span data-lang="de">.
// This script picks one (?lang=de, then the visitor's earlier choice, then the browser
// language) and site.css hides the other. Buttons with data-set-lang="en|de" switch.
(function () {
  var KEY = "rh-lang";

  function initial() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "en" || param === "de") return param;
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "de") return saved;
    } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute("data-ui", lang);
    root.lang = lang;
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-set-lang") === lang));
    });
  }

  window.setLang = function (lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  };

  var lang = initial();
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () { apply(lang); });
  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set-lang]");
    if (!button) return;
    lang = button.getAttribute("data-set-lang");
    window.setLang(lang);
  });
})();
