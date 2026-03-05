function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => { document.getElementById(id).innerHTML = data; });
}

loadComponent('nav-placeholder', 'nav.html');
loadComponent('footer-placeholder', 'footer.html');

    // <!-- Für das Davis-Cup-Clubturnier --> !

let scoreBlue = 0;
let scoreRed = 0;

function updateScore(team) {
    if (team === 'blue') {
        scoreBlue++;
        document.getElementById('score-blue').innerText = scoreBlue;
    } else {
        scoreRed++;
        document.getElementById('score-red').innerText = scoreRed;
    }
}

function resetScore() {
    if(confirm("Punktestand wirklich zurücksetzen?")) {
        scoreBlue = 0;
        scoreRed = 0;
        document.getElementById('score-blue').innerText = "0";
        document.getElementById('score-red').innerText = "0";
    }
}
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
