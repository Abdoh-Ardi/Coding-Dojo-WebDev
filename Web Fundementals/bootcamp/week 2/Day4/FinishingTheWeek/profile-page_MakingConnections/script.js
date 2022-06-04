

var acceptButtonArray = document.querySelectorAll('img[alt="accept"]');
console.log(acceptButtonArray);

var acceptRequestArray = document.querySelectorAll('.card-list-item');
console.log(acceptRequestArray);
//0: Requests 1: connections
var connectionArray = document.querySelectorAll(".badge");
//accept button
for (let i = 0; i < acceptButtonArray.length; i++) {
    acceptButtonArray[i].addEventListener("click",
        function () {
            acceptRequestArray[i].style.display = "none";
            --connectionArray[0].innerHTML;
            //split the string to array removing the + sign 0:[500] 1:[] 
            connectionArray[1].innerHTML = (++connectionArray[1].innerHTML.split("+")[0]) + "+";
        });
}
//refuse button
var closeButtonArray = document.querySelectorAll('img[alt="close"]');
var closeRequestArray = document.querySelectorAll('.card-list-item');
//add listeners
for (let i = 0; i < acceptButtonArray.length; i++) {
    closeButtonArray[i].addEventListener("click", function () {
        closeRequestArray[i].style.display = "none";
        --connectionArray[0].innerHTML;
    });
}

//change username onclick
var userName = document.getElementById("editProfile").addEventListener("click", function () {
    document.getElementById("userName").innerHTML = "Jane. D.";
});
