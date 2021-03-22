/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionsList = document.querySelectorAll('section');
const navBarMenu = document.getElementById('navbar__list');
// the width of the viewport
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// the height of the viewport
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/  
function createNavBarMenu() {
    sectionsList.forEach(createNavBarMenuItem);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavBarMenu();

function createNavBarMenuItem(section) {
    let liItem = navBarMenu.appendChild(document.createElement('li'));
    let aItem = liItem.appendChild(document.createElement('a'));
    aItem.innerHTML = section.dataset.nav;
    aItem.classList.add('menu__link');
    aItem.setAttribute('data-nav', section.id);
}

// Add class 'active' to section when near top of viewport
function viewport() {
    sectionsList.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top >= -200 && rect.top <= 500;
            if(isInViewport){
                section.classList.add('your-active-class');
                section.style.cssText = "background-color: black;"
            }else {
                section.classList.remove('your-active-class');
                section.style.cssText = "background-color: none;"
            }
    })
}

document.addEventListener('scroll', viewport);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
const links = document.querySelectorAll('.navbar__menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        scrollToSection = document.getElementById(link.dataset.nav);
        scrollToSection.scrollIntoView({behavior: "smooth"});
    })
})