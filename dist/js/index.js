// Select DOM objects
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const navItemsText = navItems.forEach(item => item.innerText)
const pathname = window.location.pathname;

// Set initial states of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'))

        // Set menu state
        showMenu = false;
    }
}

var currentPage = location.href;
var allA = document.getElementsByClassName('nav-link');
for (var i = 0, len = allA.length; i < len; i++) {
   if (allA[i].href == currentPage) {
      allA[i].className = "current";
   }
}
