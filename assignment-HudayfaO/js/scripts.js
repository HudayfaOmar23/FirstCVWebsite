document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav');

  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});


menuBtn.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")


menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});


