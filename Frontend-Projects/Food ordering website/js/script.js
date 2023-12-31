const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.onscrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeout() {
  setInterval(loader, 3000);
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=> {
  if(window.pageYOffset > 200) {
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active");   
  }
})

window.onload = fadeout();
