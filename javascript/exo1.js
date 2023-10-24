// Créer une fonction qui prend deux nombres en paramètre et retourne
//  leur somme.
function additionner(a, b) {
    return a + b;
}

var nombre1 = 5;
var nombre2 = 3;
var resultat = additionner(nombre1, nombre2);

console.log("La somme de " + nombre1 + " et " + nombre2 + " est : " + resultat);

document.getElementById("resultat").textContent = "La somme est : " + resultat;