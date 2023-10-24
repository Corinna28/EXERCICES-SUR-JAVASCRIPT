var nom = "Corinna";

        // Création de la variable pour l'âge
        var age = 40;  

        // Affichage du type de données de chaque variable
        var resultat = "Le type de données de la variable 'nom' est : " + typeof nom + "<br>";
        resultat += "Le type de données de la variable 'age' est : " + typeof age;

        // Affichage du résultat dans l'élément avec l'ID "resultat"
        document.getElementById("resultat").innerHTML = resultat;