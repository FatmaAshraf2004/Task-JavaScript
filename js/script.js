
alert ("welcome in my website")
var allProducts = document.querySelectorAll(".swiper-slide button")
var content = document.querySelector("#content")
var btnnn = document.querySelector("#addToCart")
var pp = document.querySelector("#pp")
var totalPrice = 0;

allProducts.forEach( function(item){
    item.onclick = function (){
        totalPrice += parseInt( item.getAttribute("price"))
        content.innerHTML += item.textContent + " , ";

        if (content.innerHTML != "" ) {
            btnnn.style.display = "block";
        }
    }
    }
)

btnnn.onclick = function(){
    //alert(totalPrice);
    console.log(totalPrice);    
    document.getElementById("pp").innerHTML = totalPrice;

}