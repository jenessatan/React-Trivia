const navHamburger = document.getElementById('navHamburger');

// register event listener on menu div for activating dropdown menu
navHamburger.addEventListener('click', (e) => {
  navHamburger.parentElement.classList.toggle('active');
})