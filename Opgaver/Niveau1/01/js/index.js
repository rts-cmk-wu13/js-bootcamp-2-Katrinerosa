document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("myButton");

  // Array med de to farver
  let colors = ["#eee", "#7f7"];

  // Startfarve indeks
  let colorIndex = 0;

  button.addEventListener("click", function () {
    // Skift til næste farve
    colorIndex = (colorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[colorIndex];
  });
});
