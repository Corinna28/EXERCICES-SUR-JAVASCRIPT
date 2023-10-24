
// Écrivez une boucle qui affiche les nombres de 1 à 10.

for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    document.getElementById("nombre").appendChild(listItem);}