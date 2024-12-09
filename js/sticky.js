window.onscroll = function () {
    changeMenuBackground();
};

function changeMenuBackground() {
    // Select both navbar elements
    var menuBimini = document.querySelector(".navbar-wrapper-bimini");
    var menuSmall = document.querySelector(".navbar-wrapper-small");

    // Determine if the page has scrolled beyond 100px
    if (window.pageYOffset > 100) {
        if (menuBimini) {
            menuBimini.classList.add("sticky");
        }
        if (menuSmall) {
            menuSmall.classList.add("sticky1");
        }
    } else {
        if (menuBimini) {
            menuBimini.classList.remove("sticky");
        }
        if (menuSmall) {
            menuSmall.classList.remove("sticky1");
        }
    }
}
