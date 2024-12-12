document.addEventListener("DOMContentLoaded", function () {
  const loadingElement = document.getElementById("loading-page-small");
  const mainElement = document.getElementById("main");
  const mainSmallElement = document.getElementById("main-small");

  // Hide loading screen and reveal #main after 3 seconds
  setTimeout(() => {
      loadingElement.style.display = "none";
      mainElement.style.opacity = 1; // Ensure visibility
      mainSmallElement.style.opacity = 1; // Ensure visibility
  }, 4000); // Matches the animation duration of #loading-page-small
});
