// Ecrivez une boucle qui affiche la somme des nombres de 1 à 100.

let somme = 0;

        for (let nombre = 1; nombre <= 100; nombre++) {
            somme += nombre;
        }


        document.getElementById("somme").textContent = "La somme des nombres de 1 à 100 est : " + somme;