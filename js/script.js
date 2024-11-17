document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("index-body")) 
    {}

    // Criterion: Modified DOM Text (Footer Year)
    const footer = document.querySelector("#addate");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} Nicole Bugarin`;
    } else {
        console.error("Footer element not found. Ensure there is a <p> tag inside the <footer>.");
    }
 // Console log to confirm page load
 console.log("Page loaded, JavaScript is running.");
});


// Alert Button and Hover functionality
const alertButton = document.getElementById("btn-alert");

console.log("Alert button clicked!");
alertButton.addEventListener("click", function() {
    alert("Alright, cool. Move on.");
});

alertButton.addEventListener("mouseover", function() {
    alertButton.innerHTML = "!";
});

alertButton.addEventListener("mouseout", function() {
    alertButton.innerHTML = "Click me";
});


// Portfolio Greeting based on the time of day
let greeting = document.createElement("h2");
let currentHour = new Date().getHours();
if (currentHour < 12) {
    greeting.innerHTML = "Good morning!";
    greeting.classList.add("morning");
} else if (currentHour >= 12 && currentHour < 17) {
    greeting.innerHTML = "Good afternoon!";
    greeting.classList.add("afternoon");
} else {
    greeting.innerHTML = "Good evening!";
    greeting.classList.add("evening");
}
document.body.insertBefore(greeting, document.body.firstChild);


// More Button Interaction
    const numberslist = btnAlert = document.getElementById("btn-alert");
    if (btnAlert) {
        btnAlert.addEventListener("click", () => {
            const messages = [
                "Nvm. Click the picture."
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        });
    }


// Change background color when the user clicks on the profile picture
const profileImage = document.querySelector('img');
profileImage.addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(135deg, #5f4b8b 30%, #c8a8d8 80%)'; // Soft purple hues for the background
    alert("Ok bye.");
});








