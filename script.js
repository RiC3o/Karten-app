// script.js

function drawCard() {
    // Zufällige Zahl zwischen 1 und 10 generieren
    const randomIndex = Math.floor(Math.random() * 10) + 1;

    // Bildpfad basierend auf der Zufallszahl festlegen
    const imagePath = `bilder/karte${randomIndex}.png`;

    // Bildquelle im HTML aktualisieren
    document.getElementById("card-image").src = imagePath;

    // Punkte zufällig setzen (optional)
    const points = Math.floor(Math.random() * 10) + 1; // zufällige Punktzahl von 1 bis 10
    document.querySelector(".points").innerText = `${points} Punkte`;
}
