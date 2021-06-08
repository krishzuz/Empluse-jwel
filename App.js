let mouseCursor = document.querySelector(".cursor");
let mouseCursor2 = document.querySelector(".cursor2");
let links = document.querySelectorAll(".lin");
let pic = document.getElementById("hovered");
let pic1 = document.getElementById("hovered1");
let div2 = document.getElementById("div2");
let Clickable1 = document.getElementById("clickable1");
console.log(div2);
window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

links.forEach((lin) => {
    lin.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("lover");
        lin.classList.remove("hovered");
    });
    lin.addEventListener("mouseover", () => {
        mouseCursor.classList.add("lover");
        lin.classList.add("hovered");
    });
});

pic.addEventListener("mouseover", (e) => {
    mouseCursor.classList.add("hoveredImg");
});
pic.addEventListener("mouseleave", (e) => {
    mouseCursor.classList.remove("hoveredImg");
});

document.body.addEventListener("mousedown", (e) => {
    mouseCursor.classList.add("Clicked");
});
document.body.addEventListener("mouseup", (e) => {
    mouseCursor.classList.remove("Clicked");
});

div2.addEventListener("mouseover", (e) => {
    mouseCursor.classList.add("AnimationCursor");
});
div2.addEventListener("mouseleave", (e) => {
    mouseCursor.classList.remove("AnimationCursor");
});