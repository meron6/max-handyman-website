document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Get values from contact form fields
    let name = document.getElementById('contact-name').value;
    let email = document.getElementById('contact-email').value;
    let message = document.getElementById('contact-message').value;

    // Check if fields are filled
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); 
    } else {
        alert("Your message has been sent successfully!");
    }
});

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    // Get values from appointment form fields
    let name = document.getElementById('appointment-name').value;
    let email = document.getElementById('appointment-email').value;
    let phone = document.getElementById('appointment-phone').value;
    let date = document.getElementById('appointment-date').value;
    let time = document.getElementById('appointment-time').value;
    let service = document.getElementById('appointment-service').value;

    // Check if fields are filled
    if (!name || !email || !phone || !date || !time || !service) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); 
    } else {
        alert("Your appointment has been booked successfully!");
    }
});