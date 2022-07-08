const sidenav = document.querySelector('.menuList');
const btnMenu = document.querySelector('.ham-menu');



let handleNav = () => {

    sidenav.classList.toggle("navActive");

}

btnMenu.addEventListener('click', handleNav);
