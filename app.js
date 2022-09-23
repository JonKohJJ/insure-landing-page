
// Move nav links down
var navlinks = document.getElementsByClassName('nav-links')[0];
var navbar = document.getElementsByClassName('navbar')[0];
let thisHeight = navlinks.clientHeight - navbar.clientHeight;
navlinks.style.height = thisHeight + 'px';
navlinks.style.marginTop = navbar.clientHeight + 'px';


// when hamburger is clicked
var burger = document.getElementsByClassName('hamburger')[0];
burger.addEventListener('click', function(){
    
    if (navlinks.classList.contains('active')){
        navlinks.classList.remove('active');
        //change icon to burger icon
        burger.src = "./images/icon-hamburger.svg";
    }else{
        navlinks.classList.add('active');
        //change icon to close icon
        burger.src = "./images/icon-close.svg";
    }
});
