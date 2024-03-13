
let = employees = [
  {
  "name": "Vanessa Lee", 
  "email": "vanessaLee@gmail.com",
  "position": "Agent",
  },
  {
  "name": "Jack Daniels",
   "email": "Jackdaniels@gmail.com",
   "position": "Manager",
  },
  {
   "name": "Phil Grants",
   "email": "Phil1545@gmail.com",
   "position": "Advisor",
   }, 
];

const myCards = document.getElementById("my-cards");

function createCards() {

  let myCardContent = "";

  for (let i = 0; i < employees.length; i++) {

    myCardContent = myCardContent + ` 
    <div class="card my-5 ">
      <div class="card-header">${employees[i].name}</div>
      <div class="card-body">
        The email of this employee is ${employees[i].email} and 
        the job possition is ${employees[i].position}
      </div>
    </div> `

  }

  myCards.innerHTML = myCardContent;
}

createCards();


let officeLocations = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  
const groupList = document.getElementById("groupList");

function createList(){

  let groupListContent = '';

  officeLocations.map( (item)=>{

        groupListContent = groupListContent +  `<li>${item}</li>`;

  });

  groupList.innerHTML = groupListContent;
}


