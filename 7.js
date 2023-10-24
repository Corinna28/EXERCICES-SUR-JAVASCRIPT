// Créez une fonction qui prend en paramètre un rayon et retourne la
//  surface d'un cercle

function calculerSurfaceCercle(rayon) {
    const pi = Math.PI;
    const surface = pi * Math.pow(rayon, 2);
    return surface;
}

function afficherSurfaceCercle() {
    const rayon = parseFloat(document.getElementById("rayon").value);
    const resultat = document.getElementById("resultat");

    if (!isNaN(rayon)) {
        const surfaceCercle = calculerSurfaceCercle(rayon);
        resultat.textContent = "La surface du cercle de rayon " + rayon + " est " + surfaceCercle;
    } else {
        resultat.textContent = "Veuillez entrer un rayon valide.";
    }
}