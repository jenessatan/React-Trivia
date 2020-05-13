const data = `[
  {
    "message": "i love you. and there's nothing you can do about it",
    "date": "May 11, 2020"
  },
  {
    "message": "if you start leaving the house again. who will be around to say. ohhh big stretch. every time i do a stretch",
    "date": "May 4, 2020"
  },
  {
    "message": "the human is attempting to exercise at home. and to help them with this. i will climb on top of them. making any movements almost impossible",
    "date": "April 21, 2020"
  },
  {
    "message": "some cuddles. would go a long way right now",
    "date": "April 6, 2020"
  },
  {
    "message": "i wasn't a very good dog... april fools. i was so good",
    "date": "April 1, 2020"
  }
]`;

const navHamburger = document.getElementById('navHamburger');

navHamburger.addEventListener('click', (e) => {
    navHamburger.parentElement.classList.toggle('active');
})

const table = document.getElementById('message-table');

// Load messages from JSON
let loadedMsgs = JSON.parse(data);

loadedMsgs.forEach((msg) => {
  let row = table.insertRow(1);
  let msgCell = row.insertCell(0);
  msgCell.innerHTML = msg.message;
  // let dateCell = row.insertCell(1);
  // dateCell.innerHTML = msg.date;
})

// onclick function to add user inputted message to list
let saveMsg = () => {
  let inputValue = document.getElementById('userInput').value;
  let row = table.insertRow(1);
  let cell = row.insertCell(0);
  cell.innerHTML = inputValue;
  document.getElementById('userInput').value = "";
}