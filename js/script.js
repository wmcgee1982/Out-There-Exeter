window.onscroll = function() {changeMenuBackground()};

function changeMenuBackground() {
    var menu = document.querySelector(".navbar-wrapper-bimini");
    if (window.pageYOffset > 100) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}

window.onscroll = function() {changeMenuBackground()};

function changeMenuBackground() {
    var menu = document.querySelector(".navbar-wrapper-small");
    if (window.pageYOffset > 100) {
        menu.classList.add("sticky1");
    } else {
        menu.classList.remove("sticky1");
    }
}