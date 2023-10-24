// Créez un tableau contenant les jours de la semaine

const joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        const listeJoursSemaine = document.getElementById("Semaine");

        joursSemaine.forEach(function(jour) {
            const li = document.createElement("li");
            li.textContent = jour;
            listeJoursSemaine.appendChild(li);
        });