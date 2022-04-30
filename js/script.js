// Toggle Side Navbar and top down scroll
var navLinks = document.getElementById("nav-links");
var topScroll = document.getElementById("top__scroll");

function toggleShow() {
    navLinks.style.right = "0";  
}
function toggleHide() {
    navLinks.style.right = "-250px";
}

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navLinks.style.right = "-250px";
            topScroll.style.transform= "translateX(-10%)";
    }
    else {
        topScroll.style.transform= "translateX(150%)";
    }
}

// Modal toggle
const modalContainer = document.getElementById("modal_container");
const contactBtn = document.getElementById("contact_btn");
const closeBtn = document.getElementById("close_btn");

contactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modalContainer.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})
