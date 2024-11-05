// script.js

function drawCard() {
    // Zufällige Zahl zwischen 1 und 5 generieren
    const randomIndex = Math.floor(Math.random() * 5) + 1;

    // Bildpfad basierend auf der Zufallszahl festlegen
    const imagePath = `bilder/karte${randomIndex}.png`;

    // Bildquelle im HTML aktualisieren
    document.getElementById("card-image").src = imagePath;

}
