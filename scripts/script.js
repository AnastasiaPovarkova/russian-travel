"use strict"
let page = document.querySelector(".page");
let images = document.querySelectorAll(".photo-grid__image");

images.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("photo-grid__image-active");
    page.classList.toggle("page__no-scroll");
  })
})
