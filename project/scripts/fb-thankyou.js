const feedback = JSON.parse(localStorage.getItem("feedbackData"));
if(feedback){
  document.getElementById("service").textContent = feedback.serviceName;
  document.getElementById("rating").textContent = feedback.rating;
  document.getElementById("features").textContent = feedback.features.join(", ");
  document.getElementById("reviewText").textContent = feedback.reviewText || "No comment provided";
  document.getElementById("userName").textContent = feedback.userName || "Anonymous";
}