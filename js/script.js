// Alert Button and Hover functionality
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function() {
    alert("Alright, cool. Move on.");
});
alertButton.addEventListener("mouseover", function() {
    alertButton.innerHTML = "Hovered!";
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