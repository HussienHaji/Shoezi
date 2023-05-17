const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const personImage = document.querySelector(".person-image");
const personName = document.querySelector(".person-name");
const personText = document.querySelector(".person-text");
const testiArrowLeft = document.querySelector(".left");
const testiArrowRight = document.querySelector(".right");
let currtentTestimonial = 0;

const persons = [
  {
    name: "Emily White",
    image: "./images/person.jpg",
    text: "I had a fantastic experience shopping on this shoe website! The user-friendly interface made it easy to find the styles I was looking for, and the variety of options exceeded my expectations.",
  },
  {
    name: "Thomas Johnson",
    image: "./images/person2.jpg",
    text: "I recently purchased a pair of shoes from this site and I couldn't be happier! The process was seamless and the shoes fit perfectly. I highly recommend this site for anyone in need of quality footwear.",
  },
  {
    name: "Anthony Taylor",
    image: "./images/person3.jpg",
    text: "Excellent shoes, easy ordering process, and fast delivery! Highly recommend this site for anyone looking for stylish and comfortable footwear.",
  },
  {
    name: "James Davis",
    image: "./images/person4.jpg",
    text: "The selections were vast and reasonably priced. Shipping was fast and the shoes felt high quality. I would recommend this store for quality shoes at a great value",
  },
];

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      navList.classList.remove("active");
    }, 300);
  });
});

const changeTestimonial = (right) => {
  
  if (right) currtentTestimonial++;
  if (currtentTestimonial > persons.length - 1) currtentTestimonial = 0;
  if (!right) currtentTestimonial--;
  if (currtentTestimonial < 0) currtentTestimonial = persons.length - 1;

  personImage.setAttribute("src", persons[currtentTestimonial].image);
  personName.innerText = persons[currtentTestimonial].name;
  personText.innerText = persons[currtentTestimonial].text;
};

testiArrowRight.addEventListener("click", () => changeTestimonial(true));
testiArrowLeft.addEventListener("click", () => changeTestimonial(false));

// header animation
const headerText = document.querySelector(".header .text-container");
const headerImage = document.querySelector(".header .image-container");

function addAnimations() {
  headerText.classList.add("active");
  headerImage.classList.add("active");
}

window.addEventListener("DOMContentLoaded", addAnimations);

function fixedNav(e) {
  const headerHeight = document.querySelector(".header").clientHeight;
  if (window.scrollY > headerHeight) nav.classList.add("fixed");
  else nav.classList.remove("fixed");
}

document.addEventListener("scroll", fixedNav);
