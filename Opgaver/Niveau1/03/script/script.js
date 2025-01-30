document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll("img"); // her! Henter alle billeder
    let button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        images.forEach(img => img.toggleAttribute("hidden")); // Skifter hidden-attribut
    });
});
