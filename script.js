// Beispiel-Kartendaten (hier kannst du deine Karten definieren)
const cards = [
    { task: "Beschreibe ohne das Wort zu sagen.", word: "Auto", points: "5 Punkte" },
    { task: "Erkläre durch Gesten.", word: "Ball", points: "3 Punkte" },
    { task: "Summ das Lied", word: "Happy Birthday", points: "4 Punkte" },
    // Weitere Karten hinzufügen
];

function drawCard() {
    // Zufällige Karte auswählen
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // Inhalte der Karte in HTML aktualisieren
    document.querySelector(".task-text").innerText = selectedCard.task;
    document.querySelector(".word").innerText = selectedCard.word;
    document.querySelector(".points").innerText = selectedCard.points;
}
