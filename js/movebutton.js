const buttonGroup = document.querySelector(".layout");

const firstButton = document.querySelector(".buttonFunction:first-child");
const newBackgroundImageUrl = "../img/backgroundhover2.jpg";

firstButton.addEventListener("mouseenter", () => {
  buttonGroup.style.background = `url(${newBackgroundImageUrl}) center no-repeat`;
  buttonGroup.style.backgroundSize = "cover"
});

firstButton.addEventListener("mouseleave", () => {
  buttonGroup.style.background= "url(../img/background1.jpg) center no-repeat";
  buttonGroup.style.backgroundSize = "cover"
});
// Function để thay đổi vị trí của button khi di chuột qua
const changePosition = () => {
    // Lấy kích thước của cửa sổ trình duyệt
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Lấy phần tử .buttonFunction:last-child
    const lastButton = document.querySelector(".buttonFunction:last-child");

    // Tạo các số ngẫu nhiên cho tọa độ x và y trong khoảng từ 0 đến kích thước cửa sổ trình duyệt
    const x = Math.floor(Math.random() * (windowWidth - lastButton.offsetWidth));
    const y = Math.floor(Math.random() * (windowHeight - lastButton.offsetHeight));

    // Đặt vị trí mới cho phần tử
    lastButton.style.position = "absolute";
    lastButton.style.left = x + "px";
    lastButton.style.top = y + "px";
};

// Gọi hàm changePosition khi di chuột qua phần tử .buttonFunction:last-child
document.querySelector(".buttonFunction:last-child").addEventListener("mouseover", changePosition);
