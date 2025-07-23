document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-btn"); // create a constant to yes-btn, for personalization
    const noButton = document.getElementById("no-btn"); // create a constant to no-btn, for personalization

    let noScale = 1.0;

    // when "yes" is pressed...
    yesButton.addEventListener("click", () => {
        window.location.href = "yeah.html"; // - page send user to yeah.html
    });

    // When "no" is pressed...
    noButton.addEventListener("click", () => {
        if (noScale > 0) {
            noScale -= 0.2;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Se o botão "Não" ficar muito pequeno, ele desaparece
        if (noScale <= 0) {
            noButton.style.display = "none";
        }
    });
});


// ---------------------------------------------------------------------------------------------------//