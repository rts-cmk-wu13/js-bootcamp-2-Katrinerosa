document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("#buttons button"); // Korrekt selektor

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active")); // Fjern lys fra andre knapper
            this.classList.add("active"); // Tænd for den trykkede knap
        });
    });
});
