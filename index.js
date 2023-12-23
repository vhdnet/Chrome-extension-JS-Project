let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const UlEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  UlEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
