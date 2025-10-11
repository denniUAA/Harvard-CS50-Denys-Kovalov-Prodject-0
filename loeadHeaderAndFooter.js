function loadHTML(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${url}:`, error));
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");
