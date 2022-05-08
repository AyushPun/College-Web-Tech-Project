var topScroll = document.getElementById("top__scroll");

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


// login signup
    let prism = document.querySelector(".rec-prism");

    function showSignup(){
        prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    }
    function showLogin(){
        prism.style.transform = "translateZ(-100px)";
    }
    function showForgotPassword(){
        prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    }

    function showSubscribe(){
        prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
    }

    function showContactUs(){
        prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
    }

    function showThankYou(){
        prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    }


    // signup
    document.getElementById('signup').addEventListener('click', () => {
        let users={"ayush@gmail.com": "123"};
        localStorage.setItem("users",JSON.stringify(users));
        var email = document.getElementById('signup_email').value;
        var pass = document.getElementById('signup_pass').value;
        var repass = document.getElementById('signup_repass').value;

        if(pass == repass) {

            users = JSON.parse(localStorage.getItem("users"));

            if(email.length >= 4 && pass.length >= 3) {
                users[email] = pass;
                console.log(users);
                localStorage.setItem("users", JSON.stringify(users));
                console.log((localStorage.getItem("users")));
                alert("User Created");
                showThankYou();
            } 
        } else {
            alert("Password doesn't match");
        }
    })

    localStorage.setItem("auth-token", "");

    // login
    document.getElementById('login').addEventListener('click', () => {
        var email = document.getElementById('login_email').value;
        var pass = document.getElementById('login_pass').value;


        if(email.length >= 4 && pass.length >= 3) { 
            let users = JSON.parse(localStorage.getItem("users"));
    
            if(users[email] == pass) {
                showThankYou();
                localStorage.setItem("auth-token", "123456789");
                alert("Successfully Logged In");
                setTimeout(() => {
                    window.history.back();
                }, 2000);
            } else {
                alert("Invalid Credentials");
            }
        }
    })

