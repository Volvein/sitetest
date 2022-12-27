var link = document.querySelectorAll('.onclickbtn');
link.forEach((arrayElement, index) => {
    link[index].removeAttribute('onclick');
});


let menuToggle = document.querySelector(".toggle");
menuToggle.onclick = function() {
  menuToggle.classList.toggle("active")
}