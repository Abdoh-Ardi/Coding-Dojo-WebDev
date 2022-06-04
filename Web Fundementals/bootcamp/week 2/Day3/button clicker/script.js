
var likesBtn = document.getElementById("likesBtn").addEventListener("click", likesMsg);
var addDifBtn = document.getElementById("addDifBtn").addEventListener("click", removeDifBtn);
var loginBtn = document.getElementById("loginBtn").addEventListener("click", login);
function likesMsg() {
    alert("Ninja was liked");
}

function login() {
    document.getElementById("loginBtn").innerHTML = "Logout"    
}

function removeDifBtn() {
    document.getElementById("addDifBtn").style.visibility = "hidden";
}