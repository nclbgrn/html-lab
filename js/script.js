document.addEventListener("DOMContentLoaded", () => {
    // Check the page URL to run page-specific JavaScript
    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
        // Index page specific logic
        if (document.body.classList.contains("index-body")) {
            // Additional code for index.html if needed
        }

        // Criterion: Modified DOM Text (Footer Year)
        const footer = document.querySelector("#addate");
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.textContent = `© ${currentYear} Nicole Bugarin`;
        } else {
            console.error("Footer element not found. Ensure there is a <p> tag inside the <footer>.");
        }

        // Console log to confirm page load
        console.log("Index page loaded, JavaScript is running.");

        // Alert Button and Hover functionality
        const alertButton = document.getElementById("btn-alert");
        console.log("Alert button clicked!");
        alertButton.addEventListener("click", function () {
            alert("Alright, cool. Move on.");
        });

        alertButton.addEventListener("mouseover", function () {
            alertButton.innerHTML = "Sup";
        });

        alertButton.addEventListener("mouseout", function () {
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
        profileImage.addEventListener('click', function () {
            document.body.style.background = 'linear-gradient(135deg, #ffffff 30%, #688dba 80%)';
            alert("Ok bye.");
        });


 // Loop for even/odd numbers list
 const numbersList = document.getElementById("numbers"); // Assuming there is an <ol> with id="numbers" in HTML

 for (let i = 1; i <= 12; i++) {
     const listItem = document.createElement("li");
     listItem.textContent = `${i} is ${i % 2 === 0 ? "even" : "odd"}`;
     numbersList.appendChild(listItem);
 }


    } else if (currentPage.includes("about.html")) {
        // About page specific logic
        const alertButtonAbout = document.getElementById("btn-alert2");
        if (alertButtonAbout) {
            alertButtonAbout.addEventListener("click", function () {
                alert("Oh. You're still here.");
            });

            // Change button text when hovered
            alertButtonAbout.addEventListener("mouseover", function () {
                alertButtonAbout.innerHTML = "Huh"; 
            });

            // Restore original button text when mouse leaves
            alertButtonAbout.addEventListener("mouseout", function () {
                alertButtonAbout.innerHTML = "Don't click me"; 
            });
        }
    }
});
