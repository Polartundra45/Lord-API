const toggleButton = document.querySelector('.hamburger')
const nav = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('navbar-toggle')
})