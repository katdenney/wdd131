//for both booking and feedback 
function displayThankYouData() {
  const bookingSection = document.getElementById("bookingInfo");
  const feedbackSection = document.getElementById("feedbackInfo");

  if (bookingSection) {
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    if (bookingData) {
      bookingSection.innerHTML = `
        <p><strong>Name:</strong> ${bookingData.fullName}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Service:</strong> ${bookingData.service}</p>
        <p><strong>Date:</strong> ${bookingData.date}</p>
      `;
    }
  }
  if (feedbackSection) {
    const feedbackData = JSON.parse(localStorage.getItem("feedbackData"));
    if (feedbackData) {
      feedbackSection.innerHTML = `
        <p><strong>Service:</strong> ${feedbackData.serviceName}</p>
        <p><strong>Rating:</strong> ${feedbackData.rating}</p>
        <p><strong>Features:</strong> ${feedbackData.features.join(", ")}</p>
        <p><strong>Review:</strong> ${feedbackData.reviewText || "No comment provided"}</p>
        <p><strong>Name:</strong> ${feedbackData.userName || "Anonymous"}</p>
      `;
    }
  }
}
document.addEventListener("DOMContentLoaded",displayThankYouData);
