document.addEventListener('DOMContentLoaded', nav);

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        window.addEventListener('scroll', stickyNav);
    })
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.querySelector(".more");
    var btnText = document.getElementById("readbtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Voir plus";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Voir moins";
      moreText.style.display = "inline";
    }
  }