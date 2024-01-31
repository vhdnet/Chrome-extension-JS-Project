let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deletBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalstorage) {
  myLeads = leadsFromLocalstorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.vahidhosseini.net" }];

tabBtn.addEventListener("click", function () {
  console.log(tabs[0].url);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href ="${leads[i]}"> 
        ${leads[i]} 
        </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

deletBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
