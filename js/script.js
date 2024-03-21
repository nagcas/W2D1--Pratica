// Java Script
// By gianluca Chiaravalloti
// Data 21.03.2024

// Verifico se il mio script è collegato correttamente al document html
// console.log("It's working...");

// Assegno alla variabile card il puntatore della classe img2 
const card = document.querySelectorAll(".img2");
// console.log(card[0]);

// Assegno alla variabile card l'evento del document html sul click della img2 della prima card
card[0].addEventListener("click", function() {
    // console.log("Hai cliccato la card album n. 1");
    // Vai alla pagina album.html
    window.location.href = "album.html";
})