const navHamburger = document.getElementById('navHamburger');

navHamburger.addEventListener('click', (e) => {
    navHamburger.parentElement.classList.toggle('active');
})

// const table = document.getElementById('msg-list');

let saveMsg = () => {
  let inputValue = document.getElementById('userInput').value;
  let table = document.getElementById('message-table');
  let row = table.insertRow(1);
  let cell = row.insertCell(0);
  cell.innerHTML = inputValue;
  document.getElementById('userInput').value = "";
}