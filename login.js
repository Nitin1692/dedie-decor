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