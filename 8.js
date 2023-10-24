
// Créez une fonction qui convertit les degrés Celsius en degrés
//  Fahrenheit

function convertirCelsiusEnFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const resultat = document.getElementById("resultat");

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultat.textContent = celsius + " degrés Celsius équivaut à " + fahrenheit + " degrés Fahrenheit.";
    } else {
        resultat.textContent = "Veuillez entrer une valeur valide en degrés Celsius.";
    }
}