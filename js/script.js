// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


// scroll sections avtive Link


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

              // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // toggle icon navbar remove 
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");


};

/*================= scroll reveal =================*/

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(' .home-content, .heading', { origin: 'top' });

ScrollReveal().reveal(
  " .home-img, . services-container, .portfolio-box, . contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


/*================= typed js =================*/

const typed = new Typed(".multiple-text", {
  strings: ["Apps Developer", "Web Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*================= Download CV =================*/
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href =
      "https://docs.google.com/document/d/1xTkIpN4UillaS7_wOikzCbMKU6I9sNX5/edit?usp=sharing&ouid=100997560284600010552&rtpof=true&sd=true"; // Replace with actual file URL
    link.download = "Mohammad Sojib Ayman CV"; // File name
    link.click();
  });



 


// Function to send email
function sendEmail() {
    const formData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        mobile: document.getElementById('userMobile').value,
        subject: document.getElementById('emailSubject').value,
        message: document.getElementById('userMessage').value,
    };

    emailjs.send("service_etopw9i", "template_nv8dccv", formData)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send message. Please try again later.");
            console.log("FAILED...", error);
        });
}

// Next Page 

document.getElementById("readmore-btn").addEventListener("click", function () {
  const animationBox = document.getElementById("animation-box");

  // Add active class to start animation
  animationBox.classList.add("active");

  // Redirect to the new page after animation ends
  setTimeout(() => {
    window.location.href = "newpage.html"; // Change to your desired URL
  }, 1500); // Wait 1.5 seconds for the animation to complete
});
