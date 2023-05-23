// Phone Book

const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const saveBtn = document.querySelector("#save");
const display = document.querySelector("#ul");
const sortMethod = document.querySelector("#sortMethod");
const sortbtn = document.querySelector("#sortbtn");
let sorted = false;

let contacts = [
  {
    name: "Poclie",
    phone: 0909090809,
  },
  {
    name: "Himtan",
    phone: 0969007007,
  },
  {
    name: "Greagor",
    phone: 0961169119,
  },
];

displayContacts();

saveBtn.addEventListener("click", () => {
  if (name.value.trim() != "" && phone.value.trim() != "") {
    contacts.push({
      name: name.value,
      phone: phone.value,
    });

    alert("contact saved");
    name.value = "";
    phone.value = "";
    displayContacts();
  } else {
    alert("save what...??");
  }
});
sortBtn.addEventListener("click", () => {
  if (sortMethod.value == "Ass") {
    assSort();
    sorted = "Ass";
  } else {
    sorted = "Dec";
    decSort();
  }
  displayContacts();
});

//custom functions
function displayContacts() {
  if (sorted == "Ass") assSort();
  else if (sorted == "Dec") decSort();

  display.innerHTML = "";
  contacts.forEach((contact) => {
    let data = `<div id='contactDetail'> 
      <div> ${contact.name} <br> <sub> ${contact.phone} </sub></div> <sub id='call'> Call </sub> </div>`;
    let li = document.createElement("li");
    li.innerHTML = data;
    display.append(li);
  });
}

function assSort() {
  contacts.sort((first, second) => {
    let testA = first.name.toLowerCase();
    let testB = second.name.toLowerCase();
    if (testA < testB) return -1;
    if (testA > testB) return 1;
  });
}

function decSort() {
  contacts.sort((first, second) => {
    let testA = first.name.toLowerCase();
    let testB = second.name.toLowerCase();
    if (testA < testB) return 1;
    if (testA > testB) return -1;
  });
}
