const navLinks = document.querySelectorAll(".nav-link");
const contact = document.querySelector("#contact");
const shadowRemove = document.querySelectorAll(".shadow-remove");
const addContact = document.querySelector(".contact");
const removeContact = document.querySelector(".contact-remove");
const addMenu = document.querySelector(".menu-add");
const addMainMenu = document.querySelector(".mainnavbar");
const addMenuContent = document.querySelector(".mainnavbar-content");
const removeMenu = document.querySelector(".menu-remove");




contact.addEventListener('click', () => {
    addContact.classList.add("contact-display");
});

removeContact.addEventListener('click', () => {
    addContact.classList.remove("contact-display");
});

addMenu.addEventListener('click', () => {
    addMenuContent.classList.add("mainnavbar-content-display");
    addMainMenu.classList.add("mainnavbar-display");
    
});

removeMenu.addEventListener('click', () => {
    addMainMenu.classList.remove("mainnavbar-display");
    addMenuContent.classList.remove("mainnavbar-content-display");
});

   
        Array.from(navLinks).map((navscroll) => {
            navscroll.addEventListener('click', () => {
            addMainMenu.classList.remove("mainnavbar-display");
            addMenuContent.classList.remove("mainnavbar-content-display");
            });
        });
    
   
 
    let homeLen, i;
    homeLen = home.length;
    for (i = 0;i < homeLen; i++) {
        const element = home[i];
        element.addEventListener('click', () => {
            addMainMenu.classList.remove("mainnavbar-display");
            addMenuContent.classList.remove("mainnavbar-content-display");
        });
    }

   let body = document.body;
   let toggleBtn =  document.querySelector(".toggle-round");
   let currentTheme = localStorage.getItem('currentTheme');

   
   if (currentTheme) {
        body.classList.add('darktheme');
        toggleBtn.classList.toggle('push');
    } 

   toggleBtn.addEventListener('click', function () {

       toggleBtn.classList.toggle('push');
       Array.from(shadowRemove).map((shadowCut) => {
         shadowCut.classList.toggle("shadow");
       });
       
       body.classList.toggle('darktheme');

       if (body.classList.contains('darktheme')) {
           localStorage.setItem('currentTheme', 'active');
       }else{
        localStorage.removeItem('currentTheme');
       }
   });
    

$(function(){
    $(document).scroll(function(){
        var $nav = $("#navbar");
        var $scrollUp = $("#up-scroll");
        var $home = $("#home");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $scrollUp.toggleClass("up-scroll", $(this).scrollTop() > $home.height());
    });
});