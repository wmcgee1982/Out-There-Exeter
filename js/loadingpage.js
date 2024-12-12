document.addEventListener("DOMContentLoaded", function () {
  const loadingElement = document.getElementById("loading-page-small");
  setTimeout(() => {
      loadingElement.style.display = "none";
  }, 3000); // Match this duration with your animation duration
});