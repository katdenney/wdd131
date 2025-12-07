function bookingFormHandler() {
  const form = document.querySelector("#bookingForm");
  if (!form) return; 

  form.addEventListener("submit", event => {
    event.preventDefault();

    const bookingData = {
      fullName: `${form.fullName.value}`,
      email: `${form.email.value}`,
      phone: `${form.phone.value}`,
      service: `${form.service.value}`,
      date: `${form.appointmentDate.value}`
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    window.location.href = "confirmation.html";
  });
}
document.addEventListener("DOMContentLoaded", bookingFormHandler);