document.addEventListener('DOMContentLoaded', nav);

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        window.addEventListener('scroll', stickyNav);
    })
}