const paragraphe = document.getElementById("paragraphe");

        paragraphe.addEventListener("mouseover", function() {
            paragraphe.textContent = "Bonjour je m'appelle Corinna !";
        });

        paragraphe.addEventListener("mouseout", function() {
            paragraphe.textContent = "Passez la souris ici pour modifier le texte.";
        });