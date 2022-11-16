const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".floatingMenu");
const navOpacity = document.querySelector(".oppacity");


navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    navOpacity.classList.toggle("oppacity_visible");
})

