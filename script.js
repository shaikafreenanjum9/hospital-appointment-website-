// Select doctor from doctor cards
function chooseDoctor(doctorName) {
    document.getElementById("doctor").value = doctorName;

    // Scroll to appointment form
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

// Set today's date as minimum appointment date
const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

// Handle appointment form
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Phone number validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Format date
    const appointmentDate = new Date(date + "T00:00:00");

    const formattedDate = appointmentDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    // Display confirmation
    const result = document.getElementById("result");

    result.innerHTML = `
        <h3>✅ Appointment Request Successful!</h3>
        <p><strong>Patient:</strong> ${name}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>Thank you! Your demo appointment request has been received.</p>
    `;

    result.style.display = "block";

    // Reset form
    form.reset();

    // Scroll to confirmation
    result.scrollIntoView({
        behavior: "smooth"
    });

    // Reset minimum date
    dateInput.min = `${year}-${month}-${day}`;
});