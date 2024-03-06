
const buttOne = document.getElementById("btnChange1");
console.log(buttOne)






let gitLearn = ["git status", "git add", "git commit -m", "git push"];

buttOne.addEventListener("click", () => {
  for (let i = 0; i < gitLearn.length; i++) {
    let gitLearn = document.createElement("li");
    gitLearn.textContent = gitLearn[i];
    console.log(listItems);
    listOne.appendChild(listItems);
  }
  });







