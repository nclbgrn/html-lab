document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
        // Modified DOM Text (Footer Year)
        const footer = document.querySelector("#addate");
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.textContent = `© ${currentYear} Nicole Bugarin`;
        } else {
            console.error("Footer element not found. Ensure there is a <p> tag inside the <footer>.");
        }

        // Console log to confirm page load
        console.log("Index page loaded, JavaScript is running.");

        // Alert Button and Hover Functionality
        const alertButton = document.getElementById("btn-alert");
        if (alertButton) {
            alertButton.addEventListener("click", function () {
                alert("Alright, cool. Move on.");
            });

            alertButton.addEventListener("mouseover", () => {
                alertButton.innerHTML = "Sup";
            });

            alertButton.addEventListener("mouseout", () => {
                alertButton.innerHTML = "Click me";
            });
        } else {
            console.error("Alert button with id 'btn-alert' not found.");
        }

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

        // Additional Button Interaction
        const btnAlert = document.getElementById("btn-alert");
        if (btnAlert) {
            btnAlert.addEventListener("click", () => {
                const messages = ["Nvm. Click the picture."];
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                alert(randomMessage);
            });
        }

        // Change Background Color When Profile Image is Clicked
        const profileImage = document.querySelector("img");
        if (profileImage) {
            profileImage.addEventListener("click", () => {
                document.body.style.background = "linear-gradient(135deg, #ffffff 30%, #688dba 80%)";
                alert("Ok bye.");
            });
        } else {
            console.error("Profile image not found.");
        }

        // Loop for Even/Odd Numbers List
        const numbersList = document.getElementById("numbers"); // Assuming <ol id="numbers">
        if (numbersList) {
            for (let i = 1; i <= 12; i++) {
                const listItem = document.createElement("li");
                listItem.textContent = `${i} is ${i % 2 === 0 ? "even" : "odd"}`;
                numbersList.appendChild(listItem);
            }
        } else {
            console.error("Numbers list with id 'numbers' not found.");
        }
    } else if (currentPage.includes("about.html")) {
        // About Page Specific Logic
        const alertButtonAbout = document.getElementById("btn-alert2");
        if (alertButtonAbout) {
            alertButtonAbout.addEventListener("click", () => {
                alert("Now go back to homepage and click the click me button again.");
            });

            alertButtonAbout.addEventListener("mouseover", () => {
                alertButtonAbout.innerHTML = "?";
            });

            alertButtonAbout.addEventListener("mouseout", () => {
                alertButtonAbout.innerHTML = "Don't click me";
            });
        } else {
            console.error("Alert button for about page not found.");
        }
    }
});
