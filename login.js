$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });


 var login = document.getElementById('Login');


 login.addEventListener('click', (e)=>{
    e.preventDefault();
    setTimeout(() => {
        window.location.href='index.html';
    }, 1000);
 })

 var cursor = document.getElementById('cursor');
var cursor2 = document.getElementById('cursor2');
document.addEventListener('mousemove', function(e){
   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
});