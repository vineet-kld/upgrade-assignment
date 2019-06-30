var modal = document.getElementById("signInModal");
var modal1 = document.getElementById("signUpModal");


var btn = document.getElementById("signInBtn");
var btn1 = document.getElementById("signUpBtn");
var btn2 = document.getElementById("signUpBtn1");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];


btn.onclick = function () {
    if(modal.style.display === "block")
        modal.style.display = "none";
    else
        modal.style.display = "block";
};

btn1.onclick = function () {
    if(modal1.style.display === "block")
        modal1.style.display = "none";
    else
        modal1.style.display = "block";
};
btn2.onclick = function () {
    if(modal1.style.display === "block")
        modal1.style.display = "none";
    else
        modal1.style.display = "block";

    if(modal.style.display === "block")
        modal.style.display = "none";
    else
        modal.style.display = "block";
};


span.onclick = function () {
    modal1.style.display = "none";
};
span1.onclick = function () {
    modal.style.display = "none";
};


window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    else if (event.target === modal1) {
        modal1.style.display = "none";
    }
    else if (event.target === modal2) {
        modal2.style.display = "none";
    }
};