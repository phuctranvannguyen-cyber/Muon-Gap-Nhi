// ==========================
// Canvas - Bầu trời sao
// ==========================
const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ==========================
// Tạo sao
// ==========================
const stars = [];

for (let i = 0; i < 180; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.003
    });
}

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        ctx.fill();

        star.alpha += star.speed;

        if (star.alpha >= 1 || star.alpha <= 0.2) {
            star.speed *= -1;
        }

    });

    requestAnimationFrame(drawStars);

}

drawStars();


// ==========================
// Hoa anh đào
// ==========================
const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    const size = Math.random() * 14 + 10;

    petal.style.width = size + "px";
    petal.style.height = size + "px";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);

}

setInterval(createPetal, 180);


// ==========================
// Tim bay khi click
// ==========================
const hearts = document.getElementById("hearts");

document.addEventListener("click", e => {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.className = "fly-heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            (e.clientX + Math.random() * 80 - 40) + "px";

        heart.style.top =
            (e.clientY + Math.random() * 80 - 40) + "px";

        heart.style.fontSize =
            (16 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (1.5 + Math.random()) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

});


// ==========================
// Hiệu ứng gõ chữ
// ==========================
const title = document.getElementById("title");

const text = "❤️ Thương Nhi ❤️";

title.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 120);

    }

}

setTimeout(typeWriter, 800);


// ==========================
// Hiệu ứng lời chúc
// ==========================
const lines = document.querySelectorAll(".line");

lines.forEach((line, i) => {

    line.style.opacity = 0;

    setTimeout(() => {

        line.style.transition = "1.5s";

        line.style.opacity = 1;

    }, 1800 + i * 800);

});


// ==========================
// Lời chào trên tab
// ==========================
const titles = [
    "❤️ Thương Nhi ❤️",
    "🌸 Mau ăn chóng lớn nhé",
    "😴 Ngủ nhiều lên nhé",
    "💕 Chúc em luôn vui vẻ"
];

let t = 0;

setInterval(() => {

    document.title = titles[t];

    t++;

    if (t >= titles.length) t = 0;

}, 2500);