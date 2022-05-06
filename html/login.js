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

// loader
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};