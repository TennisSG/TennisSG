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


// WhatsApp Anmeldung Training
function sendTrainingWhatsApp() {
    const name = document.getElementById('nameKind').value;
    const jg = document.getElementById('jahrgang').value;
    const art = document.getElementById('trainingsart').value;
    const athl = document.getElementById('athletik').checked ? "JA" : "Nein";
    const wunsch = document.getElementById('wuensche').value;
    
    // Helfer-Funktion zum Auslesen der Tage
    function getDayTime(dayPrefix, dayName) {
        const von = document.getElementById(dayPrefix + '_von').value;
        const bis = document.getElementById(dayPrefix + '_bis').value;
        return (von !== "Keine Zeit" && bis !== "") ? `${dayName}: ${von}-${bis} Uhr` : "";
    }

    const zeitenListe = [
        getDayTime('mo', 'Mo'), getDayTime('di', 'Di'), getDayTime('mi', 'Mi'),
        getDayTime('do', 'Do'), getDayTime('fr', 'Fr'), getDayTime('sa', 'Sa')
    ].filter(t => t !== "").join('\n');

    if(!name || !jg || !art || zeitenListe === "") {
        alert("Bitte fülle Name, Jahrgang, Trainingsart und mindestens einen Zeitraum aus!");
        return;
    }

    const message = encodeURIComponent(
        `🎾 ANMELDUNG TRAINING\n\n` +
        `👤 Kind: ${name} (${jg})\n` +
        `📝 Art: ${art}\n` +
        `🏃 Athletik: ${athl}\n\n` +
        `📅 VERFÜGBARKEIT:\n${zeitenListe}\n\n` +
        `💭 Wünsche: ${wunsch}\n\n` +
        `🏆 Ranking-Zustimmung: ${document.getElementById('consent_rank').checked ? "JA" : "NEIN"}\n` +
        `📹 Video-Zustimmung: ${document.getElementById('consent_video').checked ? "JA" : "NEIN"}`
    );

    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}

// Stelle sicher, dass die toggleMenu-Funktion in deiner script.js steht (die auf jeder Seite geladen wird).
function toggleMenu(event) {
    if (event) event.stopPropagation();
    var nav = document.getElementById("nav-list");
    nav.classList.toggle("active");
}

// NEU: Speziell für die Dropdowns am Handy
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            // Findet das Untermenü in diesem Listenpunkt
            var content = this.querySelector('.dropdown-content');
            
            // Wenn es schon offen ist -> zu machen. Wenn zu -> aufmachen.
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Erst alle anderen Dropdowns schließen (für die Übersicht)
                document.querySelectorAll('.dropdown-content').forEach(c => c.style.display = 'none');
                content.style.display = 'block';
            }
            e.stopPropagation();
        }
    });
});

