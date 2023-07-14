const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

var form = document.getElementById("Book-Us");

function radioHandle(value) {
  console.log("value : " + value)
  if (value == "Other") {
    console.log("true")

    var sch = document.getElementById("Other-alt");
    sch.style.display = 'block';
    sch.setAttribute("name", "Service");
  } else {
    console.log("false")

    var sch = document.getElementById("Other-alt");
    sch.style.display = 'none';
    sch.setAttribute("name", "Service-alt")
  }
}