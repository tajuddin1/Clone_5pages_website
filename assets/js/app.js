var navIcon = document.getElementById("navIcon");
var leftmenu =document.getElementById("leftMenu");
var body = document.getElementById("body");

document.onclick= function(e){
    if(e.target.id !=='leftmenu' && e.target.id !=='navIcon'){
        navIcon.classList.remove('active');
        leftmenu.classList.remove('fitMenu');
    }
}

navIcon.addEventListener('click' , function(){
    navIcon.classList.toggle('active');
    leftmenu.classList.toggle('fitMenu');
    body.classList.toggle('overflow');
     
 });