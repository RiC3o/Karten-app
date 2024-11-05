// Bild- und Button-Elemente referenzieren
const cardImage = document.getElementById("card-image");
const drawButton = document.querySelector("button");

// Kartenliste mit allen Karten
const cards = ["bilder/karte1.png", "bilder/karte2.png", "bilder/karte3.png", "bilder/karte4.png"];
const solutionCard = "bilder/4-Loesung.png"; // Die Lösungskarte für "karte4.png"
let currentIndex = 0;

// Funktion zum Ziehen einer neuen Karte
function drawCard() {
    console.log("Aktuelles Bild:", cardImage.src); // Debugging

    // Wenn Wissenskarte ("karte4.png") angezeigt wird und Button auf "Lösung anzeigen" steht
    if (cardImage.src.includes("karte4.png") && drawButton.innerText === "Lösung anzeigen") {
        cardImage.src = `${solutionCard}?timestamp=${new Date().getTime()}`; // Lösungskarte anzeigen und Cache umgehen
        drawButton.innerText = "Ziehe eine Karte"; // Button zurücksetzen
        console.log("Lösungskarte angezeigt:", cardImage.src); // Debugging
        return;
    }

    // Wenn die Lösungskarte angezeigt wird, wieder zur nächsten Karte wechseln
    if (cardImage.src.includes("4-Loesung.png")) {
        currentIndex = (currentIndex + 1) % cards.length;
        cardImage.src = `${cards[currentIndex]}?timestamp=${new Date().getTime()}`; // Nächstes Bild und Cache umgehen
        drawButton.innerText = "Ziehe eine Karte"; // Button zurücksetzen
        console.log("Nächste Karte gezogen:", cardImage.src); // Debugging
        return;
    }

    // Neue Karte ziehen
    currentIndex = (currentIndex + 1) % cards.length;
    cardImage.src = `${cards[currentIndex]}?timestamp=${new Date().getTime()}`; // Cache umgehen

    // Wenn "karte4.png" die gezogene Karte ist, ändere den Button zu "Lösung anzeigen"
    if (cardImage.src.includes("karte4.png")) {
        drawButton.innerText = "Lösung anzeigen";
    } else {
        drawButton.innerText = "Ziehe eine Karte";
    }
    console.log("Karte gezogen:", cardImage.src); // Debugging
}
