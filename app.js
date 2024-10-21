var cursor = document.getElementById("cursor");
document.onmousemove = function(e) {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openPDF() {
    window.open('images/Morse-Code-Converter.pdf', '_blank');
}

function openPDF2() {
    window.open('images/Modeling.pdf', '_blank');
}


const text = document.querySelector(".words");
let timers = [];
const textLoad = () => {
    timers.forEach(timer => clearTimeout(timer));
    timers = [];
    
    setTimeout(() => {
        text.textContent = "a Programmer";
      }, 0);

    setTimeout(() => {
        text.textContent = "a Photographer";
      }, 4000);

     setTimeout(() => {
        text.textContent = "an Engineer";
      }, 8000);

      setTimeout(() => {
        text.textContent = "a Student";
      }, 12000);

      setTimeout(() => {
        text.textContent = "a Designer";
      }, 16000);

      setTimeout(() => {
            textLoad();
      }, 20000);

    }
    textLoad();
