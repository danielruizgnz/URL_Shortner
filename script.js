const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
  var shortenedUrlTextarea = document.getElementById("shortenedUrl");

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortenedUrlTextarea.value = data;
    })
    .catch((error) => {
      shortenedUrlTextarea.value = "Error: No se puede acortar la URL!!";
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});
