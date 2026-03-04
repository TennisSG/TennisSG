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
