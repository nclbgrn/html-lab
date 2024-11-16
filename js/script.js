// 1. Alert Button and Hover functionality
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function() {
    alert("Hello world!");
});
alertButton.addEventListener("mouseover", function() {
    alertButton.innerHTML = "Hovered!";
});
alertButton.addEventListener("mouseout", function() {
    alertButton.innerHTML = "Click me";
});