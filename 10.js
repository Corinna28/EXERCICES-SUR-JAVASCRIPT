// Ecrivez un programme qui trouve le plus long mot dans un tableau de
// mots.

function trouverMotLePlusLong(tableauDeMots) {
    let motLePlusLong = '';

    for (let i = 0; i < tableauDeMots.length; i++) {
        const motCourant = tableauDeMots[i];
        if (motCourant.length > motLePlusLong.length) {
            motLePlusLong = motCourant;
        }
    }

    return motLePlusLong;
}

const mots = ["Python", "Javascript", "Java", "Ruby","C++"];
const resultat = trouverMotLePlusLong(mots);

document.getElementById("resultat").textContent = "Le mot le plus long est : " + resultat;


