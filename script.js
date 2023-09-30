import { cars } from "./cars.js";
const modalToggleBtns = document.querySelectorAll('.gallery');
const modals = document.querySelectorAll(".modal");
let currentModal;

modalToggleBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Close any open modals
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
            modals[i].classList.remove('open');
        }
        currentModal = modals[index];
        currentModal.querySelector(".slideshow-image").classList.add('show-info');
        currentModal.style.display = "block";
        currentModal.classList.add('open');

        const car = currentModal.querySelector('.show-info').getAttribute('data-car')

        currentModal.querySelector('.car-info').innerHTML = cars[car][0]
        currentModal.querySelector('.car-name').innerHTML = cars[car][1]
        // Add a close button event listener
        currentModal.querySelector('.close-button').addEventListener('click', () => {
            currentModal.style.display = "none";
            currentModal.classList.remove('open');
            currentModal = undefined;
        });
    });
});


// JavaScript to toggle the navigation menu on mobile
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".main-nav").classList.toggle("active");
});

        // JavaScript code to handle the carousel functionality
let slideIndex = 1;

function showSlide(n) {
    const slides = currentModal.querySelectorAll(".slideshow-image");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('show-info')
        };
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add('show-info')            

        const car = currentModal.querySelector('.show-info').getAttribute('data-car')
        currentModal.querySelector('.car-info').innerHTML = cars[car][0]
        currentModal.querySelector('.car-name').innerHTML = cars[car][1]
};
function nextSlide() {showSlide(slideIndex += 1)};
function prevSlide() {showSlide(slideIndex -= 1)};
document.querySelectorAll('.car-carousel .left-button').forEach(btn => {
    btn.addEventListener('click', () => {prevSlide()})
});
document.querySelectorAll('.car-carousel .right-button').forEach(btn => {
    btn.addEventListener('click', () => {nextSlide()})
});