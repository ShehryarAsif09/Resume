// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach((box, index) => {
        // Add class to trigger animation
        box.classList.add('animate');
    });
});
