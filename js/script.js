window.onscroll = function() {changeMenuBackground()};

function changeMenuBackground() {
    var menu = document.querySelector(".navbar-wrapper-bimini");
    if (window.pageYOffset > 100) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}
