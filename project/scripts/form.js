const services = [
  {
    id: "em01",
    name: "Express Manicure",
    averagerating: 4.5
  },
  {
    id: "cm02",
    name: "Classic Manicure",
    averagerating: 4.7
  },
  {
    id: "gm03",
    name: "Gel Manicure",
    averagerating: 3.5
  },
  {
    id: "an04",
    name: "Acrylic Nails",
    averagerating: 3.9
  },
  {
    id: "pd05",
    name: "Pedicure",
    averagerating: 5.0
  }
];
const select = document.querySelector("#serviceName");

services.forEach((service) => {
    let option = document.createElement("option");
    option.value = service.id;
    option.textContent = service.name;
    select.appendChild(option);
});