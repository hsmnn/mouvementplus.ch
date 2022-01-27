document.addEventListener('DOMContentLoaded', nav);

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        window.addEventListener('scroll', stickyNav);
    })
}

function stickyNav() {
    const nav = document.querySelector('.navbar');
    let navTop = nav.offsetTop;

    if (window.scrollY >= navTop) {    
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');    
    }
}