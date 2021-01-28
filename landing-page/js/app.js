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
// navigation variables
const navBarList = document.getElementById('navbar__list');
// section variables
const sectionList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {
    let nav = '';
    // Looping over the sections
    sectionList.forEach(section => {
        const sectionId = section.id;
        const sectionData = section.dataset.nav;
        nav += `<li>
                    <a class="menu__link" href="#${sectionId}">
                        ${sectionData}
                    </a>
                </li>`
    })
    // Appending the elements to the navigation bar
    navBarList.innerHTML = nav;
}

navBuilder();

// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
}

// remove active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "border:none";
}

// add active class
const addActive = (viewport, section) => {
    if(viewport){
        section.classList.add('your-active-class');
        section.style.cssText = "border:2px dashed black";
    }
}

const sectionActivation = () => {
    sectionList.forEach(section => {
        const elementOffset = offset(section);
        console.log(elementOffset)
        viewport = () => elementOffset<200 && elementOffset>= -200;
        removeActive(section);
        addActive(viewport(), section);
    })
}

window.addEventListener('scroll',sectionActivation)

// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        })
    })
}

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


