// Écrivez un programme qui affiche "pair" si un nombre est pair et
//  "impair" s'il est impair.


function verifierPairOuImpair() {
    var nombre = parseInt(document.getElementById("nombre").value);

    if (!isNaN(nombre)) {
        if (nombre % 2 === 0) {
            document.getElementById("resultat").innerHTML = nombre + " est un nombre pair.";
        } else {
            document.getElementById("resultat").innerHTML = nombre + " est un nombre impair.";
        }
    } else {
        document.getElementById("resultat").innerHTML = "Veuillez entrer un nombre valide.";
    }
}