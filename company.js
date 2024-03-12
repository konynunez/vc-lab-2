
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

function cardId(name){
 let employeeCards = document.getElementById("my-cards");
  console.log(employeeCards, "string")
  for (let i = 0; i < employees.length; i++){
  let name = employees[i];
  let body = `contact ${employees[i].position} at ${employees[i].email}`
    let card = `<div class="my-cards">
    <div class="card-title">${employees[i].name}</div>
    <div class="card-body">${body}</div>
    </div>`
    
employeeCards.innerHTML += card;
  
}
}

cardId(employees);



let offices = {"office1": "New York", "office2": "London", "office3": "Paris"};

const uList = document.querySelector("ul");
console.log(uList);

const listItems = document.querySelector("li");
console.log(listItems);

    const btnChange1 = document.getElementById("btnChange1");
    const myP = document.getElementById("myP");
  }
})


let reviews = [
  {
    "name": "Shirley Williams",
    "review": "I love this company. Their team is very talented and they are always willing to help me with any questions I have. I highly recommend them!",
    "rating": 5,
  },
  {
    "name": "Annie Disla",
    "review": "They never pick up the phone, but they are nice when they do!",
    "rating": 3,
  },
  {
    "name": "Peter Pan",
    "review": "Not a good travel agency, beware",
    "rating": 0,
  },
  {
    "name": "Shirley Williams",
    "I Liked all the specials and prices, and the tours they offer",
    "rating": 4,
  },
  {
    "name": "Overall good company and service",
    "rating": 5,
  },
];

function dsplyReviews(rev) {
  let costumerReview = document.getElementById("reviews");
  for (let i = 0; i < reviews.length; i++){
    
  }
}