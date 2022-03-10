// Initialize Swiper 
var typed = new Typed(".auto-input",{
       strings:["Seu estilo e sua identidade","Realizando seus Desejos!"],
       typeSpeed:100,
       backSpeed:100,
       loop:true
   })



   window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 1 );
});

//-----------------------------------menu-------------------------------------------------
function toggleMenu(){
    const menutoggle=document.querySelector('.menutoggle');
    const  navigation=document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
 