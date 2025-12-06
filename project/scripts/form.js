const services = [
  {
    id: "em01",
    name: "Express Manicure"
  },
  {
    id: "cm02",
    name: "Classic Manicure"
  },
  {
    id: "gm03",
    name: "Gel Manicure"
  },
  {
    id: "an04",
    name: "Acrylic Nails"
  },
  {
    id: "pd05",
    name: "Pedicure"
  }
];
const select = document.querySelector("#serviceName");

services.forEach((service) => {
    let option = document.createElement("option");
    option.value = service.id;
    option.textContent = service.name;
    select.appendChild(option);
});