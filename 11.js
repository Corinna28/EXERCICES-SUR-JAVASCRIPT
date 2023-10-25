// Créez un objet représentant un livre avec des propriétés pour le titre,
//  l'auteur et le nombre de pages.

class Livre {
    constructor(titre, auteur, nombreDePages) {
        this.titre = titre;
        this.auteur = auteur;
        this.nombreDePages = nombreDePages;
    }
}

// Création d'un objet Livre pour "Harry Potter"
const harryPotter = new Livre("Harry Potter à l'école des sorciers", "J.K. Rowling", 336);


document.getElementById("titre").textContent = harryPotter.titre;
document.getElementById("auteur").textContent = harryPotter.auteur;
document.getElementById("nombreDePages").textContent = harryPotter.nombreDePages;