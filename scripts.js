document.addEventListener("DOMContentLoaded", () => {

    const page = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        
        const href = link.getAttribute("href");
        if (href === page) {
            
            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }
    });

    if (page === "index.html" || page === "") {

        const greetingElement = document.createElement("div");
        greetingElement.style.fontWeight = "bold";
        greetingElement.style.marginBottom = "15px";
        greetingElement.style.fontSize = "1.2em";

        const hour = new Date().getHours();
        if (hour < 12) {

            greetingElement.textContent = "Good morning!";

        } else if (hour < 18) {

            greetingElement.textContent = "Good afternoon!";

        } else {

            greetingElement.textContent = "Good evening!";

        }

        const mainContent = document.querySelector("main");
        if (mainContent) {

            mainContent.prepend(greetingElement);

        }
    }

    if (page === "contact.html") {

        const form = document.querySelector("form");
        if (form) {

            form.addEventListener("submit", (e) => {

                e.preventDefault();
                alert("Your message has been sent! Thanks for reaching out.");
                form.reset();

            });
        }
    }

});
