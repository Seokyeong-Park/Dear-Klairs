let horizontalUnderline = document.getElementById("horizontal_underline");
let horizontalMenus = document.querySelectorAll(".gnb_1>li>a")
console.log(horizontalMenus);

horizontalMenus.forEach((menu)=>menu.addEventListener("mouseover",(e)=>horizontalIndicator(e)));

function horizontalIndicator(e) {
    horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px"
}