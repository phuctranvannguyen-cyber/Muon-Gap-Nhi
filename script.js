const container = document.getElementById("particles");

function createSparkle() {

    const item = document.createElement("div");

    const heart = Math.random() > 0.65;

    item.className = "sparkle";

    if (heart) {

        item.innerHTML = "❤";

        item.style.fontSize = Math.random() * 14 + 12 + "px";
        item.style.background = "transparent";
        item.style.color = "#ffffff";

    } else {

        item.style.width = Math.random() * 8 + 4 + "px";
        item.style.height = item.style.width;
        item.style.background = "rgba(255,255,255,.95)";
    }

    item.style.left = Math.random() * window.innerWidth + "px";

    item.style.top = window.innerHeight + "px";

    item.style.animationDuration = Math.random() * 3 + 3 + "s";

    item.style.opacity = Math.random();

    container.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 6500);

}

setInterval(createSparkle, 120);


// Ánh sáng nhấp nháy của trái tim

const heart = document.querySelector(".heart");

let glow = true;

setInterval(() => {

    if (glow) {

        heart.style.filter =
            "drop-shadow(0 0 20px white) drop-shadow(0 0 80px #ff69b4)";

    } else {

        heart.style.filter =
            "drop-shadow(0 0 8px white) drop-shadow(0 0 35px #ff69b4)";

    }

    glow = !glow;

}, 500);


// Hiệu ứng nghiêng nhẹ khi xoay

let angle = 0;

function rotate3D() {

    angle += 0.6;

    document.querySelector(".heart-box").style.transform =
        `rotateY(${angle}deg) rotateX(${Math.sin(angle/25)*8}deg)`;

    requestAnimationFrame(rotate3D);

}

rotate3D();