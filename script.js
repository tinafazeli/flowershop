// like btn 
var likebtn= document.getElementById ('like');
var likee=document.getElementById('like2');
function Target1(){
    likebtn.style.display='none';
    var likebtn2= document.getElementById('like2');
    likebtn2.style.display='inline';
    likebtn2.style.color='red'
}
function Target2(){
    likee.style.display='none';
    likebtn.style.display='inline';
}
// buy btn 

var buybtn1=document.getElementById('buybtn1');
var buybtn2=document.getElementById('buybtn2');
function Buy1(){
    buybtn1.style.display='none';
    buybtn2.style.display='inline';
    buybtn2.style.color='red'
}
function Buy2(){
    buybtn2.style.display='none';
    buybtn1.style.display='inline';
}

//slide show

// var carousel=document.getElementsByClassName(".slid");

// function interval(){
//     carousel.style.transform="rotate(90deg)";
//     // intervalId=setInterval(()=>{
//     //     carousel.style.rotate="90deg";
//     // },2000);
// };


var rotated = false;
let i=340;
document.getElementById('butt').onclick = function() {
    var div = document.getElementById('crousel');
    deg=i++
    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
}