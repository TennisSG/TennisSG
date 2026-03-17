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
        `📝 Art: ${art}\n` +
        `🏃 Athletik: ${athl}\n\n` +
        `📅 VERFÜGBARKEIT:\n${zeitenListe}\n\n` +
        `💭 Wünsche: ${wunsch}\n\n` +
        `🏆 Ranking-Zustimmung: ${document.getElementById('consent_rank').checked ? "JA" : "NEIN"}\n` +
        `📹 Video-Zustimmung: ${document.getElementById('consent_video').checked ? "JA" : "NEIN"}`
    );
    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}




// Öffnet/Schließt das Hauptmenü (Burger)
function toggleMenu(event) {
    if (event) event.stopPropagation(); // Wichtig: verhindert sofortiges Wiederschließe
    var nav = document.getElementById("nav-list");
    nav.classList.toggle("active");
}

// Steuert die Dropdowns auf dem Handy
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dd) {
        dd.addEventListener('click', function(event) {
            // Nur auf mobilen Geräten (unter 768px)
            if (window.innerWidth <= 768) {
                // Verhindert, dass der Klick das Hauptmenü schließt
                event.preventDefault(); 
                event.stopPropagation();
                
                // Schließt andere offene Dropdowns
                dropdowns.forEach(function(other) {
                    if (other !== dd) other.classList.remove('open');
                });

                // Öffnet/Schließt das angeklickte Dropdown
                dd.classList.toggle('open');
            }
        });
    });
     // NEU: Schließt das Hauptmenü, wenn man irgendwo auf die Seite (main) tippt
    document.querySelector('main').addEventListener('click', function() {
        var nav = document.getElementById("nav-list");
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            // Optional: Schließt auch alle offenen Dropdowns im Menü
            dropdowns.forEach(d => d.classList.remove('open'));
        }
    // Schließt das Menü automatisch, wenn ein Link angeklickt wird
    document.querySelectorAll('#nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            var nav = document.getElementById("nav-list");
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    

    });
});



// Clubmeisterschaften

function sendClubWhatsApp() {
    const name = document.getElementById('nameKindClub').value;
    const ak1 = document.getElementById('ak1').value;
    const ak2 = document.getElementById('ak2').value;
    const zeit = document.getElementById('verfuegbarkeit').value;
    const info = document.getElementById('club_bemerkung').value;

    if(!name || !ak1 || !zeit) {
        alert("Bitte fülle Name, 1. Altersklasse und Verfügbarkeit aus!");
        return;
    }

    const message = encodeURIComponent(
        `🏆 ANMELDUNG CLUBMEISTERSCHAFT 2026\n\n` +
        `👤 Spieler: ${name}\n` +
        `🎾 1. Konkurrenz: ${ak1}\n` +
        `🎾 2. Konkurrenz: ${ak2}\n` +
        `📅 Zeit: ${zeit}\n` +
        `📝 Info: ${info}`
    );

    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}


// Eltern-Kind Turnier
function sendElternKindWhatsApp() {
    const erw = document.getElementById('erwachsener').value;
    const jug = document.getElementById('jugendlicher').value;
    const beitrag = document.getElementById('beitrag').value;
    const info = document.getElementById('ek_bemerkung').value;

    if(!erw || !jug || !beitrag) {
        alert("Bitte fülle die Namen und die Info zum Beitrag aus!");
        return;
    }

    const message = encodeURIComponent(
        `👨‍👩‍👧‍👦 ANMELDUNG ELTERN-KIND TURNIER\n\n` +
        `👤 Erwachsener: ${erw}\n` +
        `👦 Jugendlicher: ${jug}\n` +
        `🍕 Beitrag/Gebühr: ${beitrag}\n` +
        `📝 Info: ${info}`
    );

    window.open(`https://wa.me/4915775211552 ?text=${message}`, '_blank');
}
