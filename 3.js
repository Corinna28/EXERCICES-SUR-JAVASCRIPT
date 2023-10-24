// Écrivez un programme qui compare deux nombres et affiche le plus
//  grand


function comparerNombres() {
    var nombre1 = parseFloat(document.getElementById("nombre1").value);
    var nombre2 = parseFloat(document.getElementById("nombre2").value);

    if (!isNaN(nombre1) && !isNaN(nombre2)) {
        if (nombre1 > nombre2) {
            document.getElementById("resultat").innerHTML = "Le plus grand nombre est : " + nombre1;
        } else if (nombre2 > nombre1) {
            document.getElementById("resultat").innerHTML = "Le plus grand nombre est : " + nombre2;
        } else {
            document.getElementById("resultat").innerHTML = "Les deux nombres sont égaux.";
        }
    } else {
        document.getElementById("resultat").innerHTML = "Veuillez entrer des nombres valides.";
    }
}