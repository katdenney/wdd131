const services = [// go back and have this load from JSON file later
  {id: "em01",name: "Express Manicure"},
  {id: "cm02",name: "Classic Manicure"},
  {id: "gm03",name: "Gel Manicure"},
  {id: "an04",name: "Acrylic Nails"},
  {id: "pd05",name: "Pedicure"}
];
// populate both dropdowns for feedback and booking forms 
const selects = document.querySelectorAll("#service, #serviceName");

services.forEach((select) => {
  selects.forEach(service => {
    const option = document.createElement("option");
    option.value = service.name; // store name not id
    option.textContent = service.name;
    select.appendChild(option);
  });
});