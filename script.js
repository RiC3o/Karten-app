// Bild- und Button-Elemente referenzieren
const cardImage = document.getElementById("card-image");
const drawButton = document.querySelector("button");

// Kartenliste mit allen Karten
const cards = ["bilder/karte1.png", "bilder/karte2.png", "bilder/karte3.png", "bilder/karte4.png"];
const solutionCard = "bilder/karte4-1.png"; // Die Lösungskarte für "karte4.png"
let currentIndex = 0;

// Funktion zum Ziehen einer neuen Karte
function drawCard() {
    // Wenn Wissenskarte ("karte4.png") angezeigt wird und Button auf "Lösung anzeigen" steht
    if (cardImage.src.includes("karte4.png") && drawButton.innerText === "Lösung anzeigen") {
        cardImage.src = solutionCard; // Zeigt die Lösungskarte an
        drawButton.innerText = "Ziehe eine Karte"; // Button zurücksetzen
        return;
    }

    // Wenn die Lösungskarte angezeigt wird, wieder zur nächsten Karte wechseln
    if (cardImage.src.endsWith("karte4-1.png")) {
        // Neue Karte ziehen (der Reihe nach)
        currentIndex = (currentIndex + 1) % cards.length;
        cardImage.src = cards[currentIndex];
        drawButton.innerText = "Ziehe eine Karte"; // Button zurücksetzen
        return;
    }

    // Neue Karte ziehen
    currentIndex = (currentIndex + 1) % cards.length;
    cardImage.src = cards[currentIndex];

    // Wenn "karte4.png" die gezogene Karte ist, ändere den Button zu "Lösung anzeigen"
    if (cardImage.src.includes("karte4.png")) {
        drawButton.innerText = "Lösung anzeigen";
    } else {
        drawButton.innerText = "Ziehe eine Karte";
    }
}
