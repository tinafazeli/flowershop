// like btn 
var likebtn= document.getElementById('like');
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