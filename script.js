const btnNo = document.getElementById('btnNo');
const textQuestion = document.getElementById('textQuestion');
const cardIcon = document.getElementById('cardIcon');
const btnContainer = document.querySelector('.btn-container');

// Hàm làm nút "Không" tự động nhảy trốn khi rê chuột hoặc chạm vào
function runAway() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán vị trí ngẫu nhiên giữ nút nằm trong màn hình nhìn thấy được
    const randomX = Math.max(20, Math.random() * (windowWidth - btnNo.offsetWidth - 40));
    const randomY = Math.max(20, Math.random() * (windowHeight - btnNo.offsetHeight - 40));

    // Đổi nút sang trạng thái cố định toàn màn hình để nhảy tự do
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Hàm xử lý khi bấm nút "Có chứ!"
function loveAccepted() {
    textQuestion.innerHTML = "Tớ biết ngay mà! 🥰<br>Nhắn tin cho tớ liền đi nhaaa!";
    cardIcon.innerHTML = "🎉🥳";
    
    // Ẩn 2 nút bấm đi
    btnContainer.style.display = 'none';

    // Tạo hiệu ứng bắn tim liên tục trong 3 giây
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            return clearInterval(interval);
        }
        createHeartPop();
    }, 80);
}

// Hàm tạo các trái tim bay lên
function createHeartPop() {
    const heart = document.createElement('div');
    heart.classList.add('heart-pop');
    
    const heartIcons = ['❤️', '💖', '💕', '🥰', '🌸', '✨'];
    heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '0px';
    
    heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}