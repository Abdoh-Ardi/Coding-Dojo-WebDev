//Part 1 :
var likesCounter = document.getElementById("likesCounter");
var likeBtn = document.getElementById("likeBtn").addEventListener("click", likesIncrementer);
function likesIncrementer() {
    var number = likesCounter.innerHTML;
    number++;
    likesCounter.innerHTML = number;
}

//Part 2:
var likesButtonArray = document.querySelectorAll(".likeBtn");
var likesCounterArray = document.querySelectorAll("#likesCounter");

for (let i = 0; i < likesButtonArray.length; i++) {
    likesButtonArray[i].addEventListener("click", function () {
        var number = likesCounterArray[i].innerHTML;
        number++;
        likesCounterArray[i].innerHTML = number;
    })

}
