const btnNo = document.getElementById('btnNo');
const textQuestion = document.getElementById('textQuestion');
const cardIcon = document.getElementById('cardIcon');
const btnContainer = document.querySelector('.btn-container');

// Hàm xử lý việc nhảy trốn
function runAway() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán vị trí ngẫu nhiên và giữ nút không bay ra ngoài màn hình
    const randomX = Math.max(20, Math.random() * (windowWidth - btnNo.offsetWidth - 40));
    const randomY = Math.max(20, Math.random() * (windowHeight - btnNo.offsetHeight - 40));

    // Chuyển nút sang trạng thái fixed để bay tự do
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Bắt sự kiện khi rê chuột vào (Dành cho Máy tính)
btnNo.addEventListener('mouseover', runAway);

// Bắt sự kiện khi vừa chạm tay vào (Dành cho Điện thoại)
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Ngăn hành vi click mặc định của điện thoại
    runAway();
});

// Hàm xử lý khi bấm nút "Có chứ!"
function loveAccepted() {
    textQuestion.innerHTML = "Tớ biết ngay mà! 🥰<br>Nhắn tin cho tớ liền đi nhaaa!";
    cardIcon.innerHTML = "🎉🥳";
    
    // Ẩn hai nút bấm
    btnContainer.style.display = 'none';

    // Tạo hiệu ứng pháo hoa trái tim liên tục trong 3 giây
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            return clearInterval(interval);
        }
        createHeartPop();
    }, 80);
}

// Tạo từng trái tim bay ngẫu nhiên
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
