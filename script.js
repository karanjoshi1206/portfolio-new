var typed = new Typed(".typing", {
  strings: ["Web Developer", "Student", "Coder", "Learner"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let menu = document.querySelector("#menu")
function toggle() {
  menu.classList.toggle("active")
  line1.classList.toggle("hide")
  line2.classList.toggle("rotate1")
  line3.classList.toggle("rotate2")
}
