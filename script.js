const headerBurger = document.getElementById('header__burger');
const headerMenu = document.getElementById('header__menu');
const body = document.body;


headerBurger.addEventListener('click', (e) => {
    e.preventDefault()
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock')
})




// links scroll

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click" , onMenuLinkClick);
    });


function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 20; 
    

window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth"
});

headerBurger.classList.remove('active');
headerMenu.classList.remove('active');
body.classList.remove('lock')
e.preventDefault();
        }
    }
}