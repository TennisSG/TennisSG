// 1. Hauptmenü (Burger) öffnen/schließen
function toggleMenu(event) {
    if (event) event.stopPropagation();
    var nav = document.getElementById("nav-list");
    nav.classList.toggle("active");
}

// 2. Dropdown-Logik für Handys (Untermenüs öffnen)
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dd) {
        dd.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                // Verhindert, dass das Menü beim Klick auf das Dropdown schließt
                event.stopPropagation();
                
                // Andere Dropdowns schließen
                dropdowns.forEach(function(other) {
                    if (other !== dd) other.classList.remove('open');
                });

                // Dieses Dropdown öffnen/schließen
                this.classList.toggle('open');
            }
        });
    });

    // 3. AUTO-CLOSE: Menü schließen, wenn ein ECHTER Link geklickt wird
    // Wir suchen nur Links, die KEINE Dropdown-Öffner sind
    document.querySelectorAll('#nav-list a:not(.dropbtn)').forEach(link => {
        link.addEventListener('click', () => {
            var nav = document.getElementById("nav-list");
            nav.classList.remove("active");
            // Auch alle Dropdowns wieder einfahren
            dropdowns.forEach(d => d.classList.remove('open'));
        });
    });

    // 4. Menü schließen, wenn man auf den Inhaltsbereich (main) tippt
    document.querySelector('main').addEventListener('click', function() {
        var nav = document.getElementById("nav-list");
        nav.classList.remove("active");
        dropdowns.forEach(d => d.classList.remove('open'));
    });
});








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
    window.open(`https://wa.me/4915775211552?text=${message}`, '_blank');
}


// WhatsApp Anmeldung Training


function sendTrainingWhatsApp() {
    const name = document.getElementById('nameKind').value;
    const jg = document.getElementById('jahrgang').value;
    const art1 = document.getElementById('trainingsart').value;
    const art2 = document.getElementById('trainingsart2').value;
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
    if(!name || !jg || !art1 || zeitenListe === "") {
        alert("Bitte fülle Name, Jahrgang, Trainingsart und mindestens einen Zeitraum aus!");
        return;
    }
    const message = encodeURIComponent(
        `🎾 ANMELDUNG TRAINING\n\n` +
        `👤 Kind: ${name} (${jg})\n` +
        `📝 Art1: ${art1}\n` +
        `📝 Art2: ${art2}\n` +
        `🏃 Athletik: ${athl}\n\n` +
        `📅 VERFÜGBARKEIT:\n${zeitenListe}\n\n` +
        `💭 Wünsche: ${wunsch}\n\n` +
        `🏆 Ranking-Zustimmung: ${document.getElementById('consent_rank').checked ? "JA" : "NEIN"}\n` +
        `📹 Video-Zustimmung: ${document.getElementById('consent_video').checked ? "JA" : "NEIN"}`
    );
    window.open(`https://wa.me/4915775211552?text=${message}`, '_blank');
}


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

    window.open(`https://wa.me/4915775211552?text=${message}`, '_blank');
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

    window.open(`https://wa.me/4915775211552?text=${message}`, '_blank');
}
