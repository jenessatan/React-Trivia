const data = `[
  {
    "message": "i wasn't a very good dog... april fools. i was so good",
    "date": "April 1, 2020"
  },
  {
    "message": "some cuddles. would go a long way right now",
    "date": "April 6, 2020"
  },
  {
    "message": "the human is attempting to exercise at home. and to help them with this. i will climb on top of them. making any movements almost impossible",
    "date": "April 21, 2020"
  },
  {
    "message": "if you start leaving the house again. who will be around to say. ohhh big stretch. every time i do a stretch",
    "date": "May 4, 2020"
  },
  {
    "message": "i love you. and there's nothing you can do about it",
    "date": "May 11, 2020"
  }
]`;

const navHamburger = document.getElementById('navHamburger');
const table = document.getElementById('message-table');
const inputField = document.getElementById('userInput');

// register event listener on menu div for activating dropdown menu
navHamburger.addEventListener('click', (e) => {
    navHamburger.parentElement.classList.toggle('active');
})

// register event listener on input box to trigger click on enter
inputField.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    e.preventDefault();
    document.getElementById('btn-save').click();
  }
})

// helper function to add new row to table
let addNewRow = (msg) => {
  let row = table.insertRow(-1);
  let msgCell = row.insertCell(0);
  msgCell.innerHTML = msg.message;
  let delCell = row.insertCell(1);
  let delBtn = document.createElement('button');
  delBtn.className = 'btn-del';
  delBtn.onclick = () => {
    deleteRow(delBtn);
  };
  delCell.appendChild(delBtn);
}

// Load messages from JSON
let loadedMsgs = JSON.parse(data);

// populate table with pre-loaded messages
loadedMsgs.forEach(addNewRow);

// onclick function to add user provided message to list
let saveMsg = () => {
  let inputValue = inputField.value;
  addNewRow({message: inputValue});
  document.getElementById('userInput').value = "";
}

// onclick function to delete row in table
let deleteRow = () => {
  let td = event.target.parentElement;
  let tr = td.parentElement;
  tr.parentElement.removeChild(tr);
}

