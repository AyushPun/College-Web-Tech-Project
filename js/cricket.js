const navLink = document.querySelector('.nav__link');
var topScroll = document.getElementById("top__scroll");

function toggleHide() {
    navLink.classList.toggle('hide');
    if(navLink.classList.contains("hide")) {
        document.getElementById("hamShow").style.display = "block";
        document.getElementById("hamClose").style.display = "none";
    } else {
        document.getElementById("hamShow").style.display = "none";
        document.getElementById("hamClose").style.display = "block";

    }
}

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topScroll.style.transform= "translateX(-10%)";
    }
    else {
        topScroll.style.transform= "translateX(150%)";
    }
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("nav").style.backgroundColor="#777";
        document.querySelector(".nav__link").style.backgroundColor="#777";

    } else {
        document.getElementById("nav").style.background="transparent";
        document.querySelector(".nav__link").style.background="transparent";
    }
}

// crousal
let i = 1;
setInterval(() => {
    i++;
    if(i>3) {
        i=1;
    } 
    document.getElementById("crousal").style.backgroundImage =`linear-gradient(rgba(4, 9, 30, 0.4), rgba(4, 9, 30, 0.4)),    url('../../images/cricket/${i}.jpg')`;
}, 5000);


