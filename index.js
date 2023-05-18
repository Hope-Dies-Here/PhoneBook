const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const saveBtn = document.querySelector("#save");
const display = document.querySelector("#ul");

let contacts = [];
/* contacts = localStorage.getItem("contacts")
 */
saveBtn.addEventListener("click", () => {
  if (name.value.trim() != "" && phone.value.trim() != "") {
    contacts.push({
      name: name.value,
      phone: phone.value,
    });
    alert("contact saved");
    contacts.forEach((contact) => {
      name.value = "";
      phone.value = "";
      let data = `${contact.name} <br> <sub> ${contact.phone}`;
      let li = document.createElement("li");
      li.innerHTML = data;
      display.append(li);
    });
  } else {
    alert("save what...??");
  }
});
