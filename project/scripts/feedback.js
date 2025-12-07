function feedbackFormHandler() {
    const form = document.querySelector("#feedbackForm");
    if (!form) return;

    form.addEventListener("submit", event=> {
        event.preventDefault();
        
        const checkedFeatures = [...form.features]
            .filter(box => box.checked)
            .map(box => box.value);

        const feedbackData = {
            serviceName: `${form.serviceName.value}`,
            rating: `${form.rating.value}`,
            features: checkedFeatures,
            reviewText: `${form.reviewText.value}`,
            userName: `${form.userName.value}`
        };

        localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
        window.location.href = "fb-thankyou.html";
    });
}
document.addEventListener("DOMContentLoaded",feedbackFormHandler);