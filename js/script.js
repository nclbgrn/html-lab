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
            alertButton.addEventListener("click", () => {
                alert("K.");
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

         // More Button Interaction
         const numberslist = btnAlert = document.getElementById("btn-alert");
         if (btnAlert) {
             btnAlert.addEventListener("click", () => {
                 const messages = [
                     "Wait. Click the picture."
                 ];
                 const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                 alert(randomMessage);
             });
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



        // Change background color when the user clicks on the profile picture
        const profileImage = document.querySelector('img');
        profileImage.addEventListener('click', function () {
            document.body.style.background = 'linear-gradient(135deg, #ffffff 30%, #688dba 80%)';
            alert("Alright cool, move on.");
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
                alert("Ok bye.");
            });

            // Change button text when hovered
            alertButtonAbout.addEventListener("mouseover", function () {
                alertButtonAbout.innerHTML = "?"; 
            });

            // Restore original button text when mouse leaves
            alertButtonAbout.addEventListener("mouseout", function () {
                alertButtonAbout.innerHTML = "Don't click me"; 
            });
        }
    }
});



