const navHamburger = document.querySelector('#navHamburger');

navHamburger.addEventListener('click', (e) => {
    navHamburger.parentElement.classList.toggle('active');
})

console.log('js file')