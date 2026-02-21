const startDate = new Date("March 1, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(Math.abs(distance) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(Math.abs(distance) / (1000 * 60)) % 60;

    const label = document.getElementById("countdown-label");

    if (distance < 0) {
        label.innerText = "Days Until We Begin";
    } else {
        label.innerText = "Days Together";
    }

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const items = document.querySelectorAll(".timeline-item");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelector(".enter-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector("#timeline");

    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
});
document.getElementById("back-btn").addEventListener("click", () => {
    window.location.href = "../index.html";
});
