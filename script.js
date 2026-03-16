function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => { document.getElementById(id).innerHTML = data; });
}

loadComponent('nav-placeholder', 'nav.html');
loadComponent('footer-placeholder', 'footer.html');

    // <!-- Für das Davis-Cup-Clubturnier --> !


function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const ak = document.getElementById('ak').value;
    const disziplin = document.getElementById('disziplin').value;
    const wert = document.getElementById('wert').value;
    const zeuge = document.getElementById('zeuge').value;

    if(!name || !ak || !disziplin || !wert || !zeuge) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }

    // Text für WhatsApp zusammenbauen
    const message = `🏆 NEUER REKORD! %0A%0A` +
                    `👤 Name: ${name} %0A` +
                    `🎾 AK: ${ak} %0A` +
                    `🎯 Disziplin: ${disziplin} %0A` +
                    `📈 Wert: ${wert} %0A` +
                    `🤝 Zeuge: ${zeuge}`;

    // WhatsApp Link öffnen (deine Nummer)
    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}

function sendTrainingWhatsApp() {
    const name = document.getElementById('nameKind').value;
    const jg = document.getElementById('jahrgang').value;
    const art = document.getElementById('trainingsart').value;
    const athl = document.getElementById('athletik').checked ? "JA" : "Nein";
    const tage = document.getElementById('tage').value;
    const zeit = document.getElementById('zeiten').value;
    const wunsch = document.getElementById('wuensche').value;
    
    // Checkboxen auslesen
    const consentRank = document.getElementById('consent_rank').checked ? "✅ JA" : "❌ NEIN";
    const consentVid = document.getElementById('consent_video').checked ? "✅ JA" : "❌ NEIN";

    if(!name || !jg || !art || !tage || !zeit) {
        alert("Bitte fülle die Pflichtfelder (Name, Jahrgang, Art, Tage, Zeiten) aus!");
        return;
    }

    const message = encodeURIComponent(
        `🎾 NEUE ANMELDUNG TRAINING\n\n` +
        `👤 Kind: ${name} (${jg})\n` +
        `📝 Art: ${art}\n` +
        `🏃 Athletik: ${athl}\n` +
        `📅 Tage: ${tage}\n` +
        `⏰ Zeiten: ${zeit}\n` +
        `💭 Wünsche: ${wunsch}\n\n` +
        `--- EINWILLIGUNG ---\n` +
        `🏆 Rekorde/Ranking: ${consentRank}\n` +
        `📹 Video-Analyse: ${consentVid}`
    );

    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}
