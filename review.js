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
    "review": "I Liked all the specials and prices, and the tours they offer",
    "rating": 4,
  },
  {
    "name": "John Doe",
    "review": "Overall good company and service",
    "rating": 5,
  },
];

const myReviewCard = document.getElementById("review-cards");

function createReviews() {

  let myReviewContent = " ";

  for (let i = 0; i < reviews.length; i++) {
    myReviewContent = myReviewContent + `<div class="card">
          <div class="card-header">${reviews[i].name}</div>
          <div class="card-body">
            Review is ${reviews[i].review} and 
            rating is ${reviews[i].rating}
          </div>
        </div> `
}
myReviewCard.innerHTML = myReviewContent;
}

createReviews();