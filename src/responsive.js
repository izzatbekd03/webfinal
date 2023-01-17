const resnav = () =>{
    const menu = document.querySelector(".menu-icon");
    const nav = document.querySelector(".navbar-nav");

    menu.addEventListener('click', () =>{
        menu.classList.toggle('menu-icon_active');
        nav.classList.toggle('navbar-nav_active');
    });
}
resnav();