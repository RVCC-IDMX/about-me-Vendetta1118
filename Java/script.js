const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");
const navbarLocation = document.querySelector(".navbar-location");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        navbarLocation.classList.remove("push-down");
}))

hamburger.addEventListener("click", () => {
    navbarLocation.classList.toggle("push-down")
});



