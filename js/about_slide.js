let mainText = document.querySelector(".about_backimg h1");

window.addEventListener("scroll", function () {
let value = window.scrollY;
console.log("scrollY", value);

// if(value > 2700, value > 1700 ) {
//  mainText.style.animation='disappear 2s ease-out forwards';
// } else {
//  mainText.style.animation='slide 2s ease-out forwards';
// }
// });

if (value < 307) {
mainText.style.animation = "slide 2s ease-out forwards";
} else {
mainText.style.animation = "disappear 2s ease-out forwards";
}
});