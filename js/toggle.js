function toggle() {
  var links = document.getElementById("myLinks");
  var mainBars = document.getElementById("fa-main-bars-main");
  var closeToggle = document.getElementById("closeToggle");
  
  if (links.style.display === "block") {
    links.style.display = "none";
    mainBars.style.display = "block";
    closeToggle.style.display = "none";
  } else {
    links.style.display = "block";
    mainBars.style.display = "none";
    closeToggle.style.display = "block";
  }
}

function toggle1() {
  const myLinks = document.getElementById("myLinks-small");
  if (myLinks.style.display === "block") {
      myLinks.style.display = "none";
  } else {
      myLinks.style.display = "block";
  }
}