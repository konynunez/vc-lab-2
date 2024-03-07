
const textChange = document.getElementById("btnChange1");
console.log(textChange);i

const displayList = document.getElementById("displayList");
console.log(displayList)


const uList = document.querySelector("ul");
console.log(uList);

const listItems = document.querySelectorAll("li");
console.log(listItems);



let gitLearn = ["git status", "git add", "git commit -m", "git push"];

 displayList.addEventListner("click", () => {
   for (let i = 0; i < gitLearn.length; i++){
    let listItems = document.createElement("li");
    uList.appendChild(listItems);
  }
})





  







