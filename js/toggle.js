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
    var x = document.getElementById("myLinks-small");
    var y = document.getElementById("main-hide-small");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }