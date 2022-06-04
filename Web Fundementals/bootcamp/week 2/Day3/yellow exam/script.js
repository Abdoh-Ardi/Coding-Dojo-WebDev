var cartBtn = document.getElementById("cartNotification").addEventListener("click", displayNotification);
// var succulentHover = document.getElementById("succulantHover").addEventListener("hover", displayDifferentImage)
function displayNotification(){
    alert("Your Cart is empty!");
}

var btn = document.getElementById("hideBtn").addEventListener("click", hideDiv);
    
hideDiv();
function hideDiv() {
    
    var container = document.getElementById("cookie").style.display = "none";;

      
    
  }