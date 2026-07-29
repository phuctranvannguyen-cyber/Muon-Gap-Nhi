const btnNo = document.getElementById('btnNo');
const textQuestion = document.getElementById('textQuestion');
const cardIcon = document.getElementById('cardIcon');
const btnContainer = document.querySelector('.btn-container');

// Tạo một biến đếm số lần người dùng cố tình nhấn/chạm vào nút Không
let clickCount = 0;

// Hàm xử lý việc nhảy trốn an toàn trong màn hình điện thoại
function runAway() {
    // Tăng biến đếm lên 1 mỗi lần chạm/rê chuột vào nút Không
    clickCount++;

    // TÌNH HUỐNG ĐẶC BIỆT: Nếu nhấn đủ 6 lần, nút Không sẽ biến mất luôn!
    if (clickCount >= 6) {
        btnNo.style.display = 'none'; // Ẩn hoàn toàn nút Không
        textQuestion.innerHTML = "Cậu trêu tớ đủ 6 lần rồi đó! <br>Bấm 'Có chứ!' đi nèee 🥺";
        return; // Dừng hàm tại đây, không cho chạy đi chỗ khác nữa
    }

    // Lấy kích thước thực tế của vùng nhìn thấy trên màn hình điện thoại
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán giới hạn tối đa (Trừ đi kích thước nút và 30px đệm để không bị sát rìa)
    const maxX = windowWidth - btnNo.offsetWidth - 30;
    const maxY = windowHeight - btnNo.offsetHeight - 30;

    // Tọa độ ngẫu nhiên luôn nằm trong phạm vi an toàn (tối thiểu cách rìa 30px)
    const randomX = Math.max(30, Math.random() * maxX);
    const randomY = Math.max(30, Math.random() * maxY);

    // Di chuyển nút
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Bắt sự kiện khi rê chuột vào (Dành cho Máy tính)
btnNo.addEventListener('mouseover', runAway);

// Bắt sự kiện khi vừa chạm tay vào (Dành cho Điện thoại)
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Ngăn hành vi click/phóng to mặc định của điện thoại
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
