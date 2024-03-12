
const uList = document.querySelector("ul");
console.log(uList);

const listItems = document.querySelector("li");
console.log(listItems);


let gitLearn = ["git status", "git add", "git commit -m", "git push"];


const btnChange1 = document.getElementById("btnChange1");
const myP = document.getElementById("myP");
let isUppercase = false;
btnChange1.addEventListener("click", function() {
  if (isUppercase) {
    myP.textContent = myP.textContent.toLowerCase();
    isUppercase = false;
  }else {
    myP.textContent = myP.textContent.toUpperCase();
    isUppercase = true;
  }
  });

const btnDisplayList = document.getElementById("displayList");
btnDisplayList.addEventListener("click", function(){
  for (let i = 0; i < gitLearn.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = gitLearn[i];
    uList.appendChild(listItem);
  }
});
