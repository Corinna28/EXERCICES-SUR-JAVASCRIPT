function afficherProprietes(objet) {
    const liste = document.getElementById("liste-proprietes-valeurs");
    for (const propriete in objet) {
        if (objet.hasOwnProperty(propriete)) {
            const listItem = document.createElement("li");
            listItem.textContent = propriete + ": " + objet[propriete];
            liste.appendChild(listItem);
        }
    }
}

// Exemple d'utilisation avec un objet
const monObjet = {
    Nom: "Corinna Fournier",
    Age: 40,
    Ville: "Amiens",
};

afficherProprietes(monObjet);





