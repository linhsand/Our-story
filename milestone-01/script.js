// IMAGE SLIDER
const slides = document.querySelectorAll(".memory-slide");
let slideIndex = 0;

setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 4000);


// FIREWORK
const before = document.getElementById("before");
const firePage = document.getElementById("firework-page");
const after = document.getElementById("after");

const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    for (let i = 0; i < 100; i++) {
        particles.push({
            x,
            y,
            radius: Math.random()*3+1,
            color: `hsl(${Math.random()*360},100%,70%)`,
            angle: Math.random()*Math.PI*2,
            speed: Math.random()*5+2,
            life: 80
        });
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,i)=>{
        p.x += Math.cos(p.angle)*p.speed;
        p.y += Math.sin(p.angle)*p.speed;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if(p.life<=0){
            particles.splice(i,1);
        }
    });
}
animate();

document.getElementById("become-btn").addEventListener("click", () => {
    before.classList.add("hidden");
    firePage.classList.remove("hidden");

    const interval = setInterval(createFirework,600);

    setTimeout(()=>{
        clearInterval(interval);
        firePage.classList.add("hidden");
        after.classList.remove("hidden");
    },5000);
});

// SAVE MEMORY
const textarea = document.getElementById("feelings");
const savedMsg = document.getElementById("saved-msg");

const saved = localStorage.getItem("milestone1-memory");
if(saved){
    textarea.value = saved;
}

document.getElementById("save-btn").addEventListener("click",()=>{
    localStorage.setItem("milestone1-memory", textarea.value);
    savedMsg.innerText = "Saved successfully 💙";
});
// BACK TO MAIN PAGE
document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "../index.html";
});
