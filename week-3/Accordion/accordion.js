
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      Image.src = "images/minus.png";
      panel.style.display = "none";
      document.getElementsByClassName('sign').src="images/plus.png"
    } else {
      panel.style.display = "block";
      Image.src = "images/minus.jpeg"
    }
  });
}
