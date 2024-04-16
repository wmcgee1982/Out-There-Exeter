function toggle() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggle1() {
    var x = document.getElementById("myLinks-small");
    var y = document.getElementById("main-hide-small");
    var z = document.getElementById("background-small");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      y.style.display = "none";
    }
  }
