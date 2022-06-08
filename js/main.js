const progress = document.getElementById('process');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// click vào button Next thì tăng giá trị currentActive lên
next.onclick = function () {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
}

// click vào button prev thì giảm giá trị currentActive xuống
prev.onclick = function () {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
}



function update() {
    // lặp qua từng circle 
    circles.forEach(function(circle, index) {
        if(index < currentActive) {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    // khai báo biến circleActives thể hiện các Circle đã có class active 
    const circleActives = document.querySelectorAll('.circle.active');

    // thay đổi chiều rộng width của biến progress mà biến progress thì lại được lấy ra từ class process bên file style.css
    progress.style.width = ((circleActives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if(currentActive === circles.length){
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}