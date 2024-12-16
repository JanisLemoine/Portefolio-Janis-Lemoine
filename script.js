
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Fonction pour ajouter la classe active
    function setActiveLink(link) {
      // Enlever la classe active de tous les autres liens
      navLinks.forEach(link => link.classList.remove('active'));
      // Ajouter la classe active au lien cliqué
      link.classList.add('active');
    }

    // Ajouter un événement pour chaque lien
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut

        // Ajouter la classe active à ce lien
        setActiveLink(link);

        // Récupérer l'ID de la section cible
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Faire défiler jusqu'à la section
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",  // Défilement fluide
            block: "start"       // Aligner au début de la section
          });
        }

        // Fermer le menu si c'est un menu responsive
        const collapseElement = document.querySelector(".navbar-collapse");
        if (collapseElement) {
          collapseElement.classList.remove("show");
        }
      });
    });

    // Garder l'élément actif même après un clic en dehors
    document.addEventListener("click", function (event) {
      const clickedOutside = !event.target.closest(".navbar-nav");
      if (clickedOutside) {
        // Réappliquer la classe active sur le dernier lien cliqué
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
          setActiveLink(activeLink);
        }
      }
    });
  });



function showSection(sectionId) {
    // Cacher toutes les sections de projets
    const sections = document.querySelectorAll('#projects-dashboard section');
    sections.forEach(section => {
        section.classList.add('d-none'); // Masquer toutes les sections
    });

    // Afficher la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('d-none'); // Afficher la section

    // Gérer l'activation des boutons
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active', 'animate-button'); // Enlever la classe active et l'animation
    });

    // Ajouter la classe active et l'animation au bouton sélectionné
    const selectedButton = document.getElementById('btn-' + sectionId);
    selectedButton.classList.add('active', 'animate-button');
}

// Initialiser la page en affichant la première section
document.addEventListener("DOMContentLoaded", function() {
    showSection('projet-pro');  // Affiche la première section (Projets Professionnels)
});

// Ajouter des écouteurs d'événements aux boutons pour afficher la section correspondante
document.getElementById('btn-projet-pro').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('projet-pro');
});

document.getElementById('btn-projet-perso').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('projet-perso');
});

document.getElementById('btn-mon-hobby').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('mon-hobby');
});


function openImageFullscreen(imageSrc) {
    // Créer un div pour afficher l'image en grand
    var fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen-image');

    // Créer l'image en grand
    var fullscreenImg = document.createElement('img');
    fullscreenImg.src = imageSrc;
    fullscreenImg.alt = 'Image en grand';

    // Ajouter un bouton pour fermer l'image
    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close-fullscreen');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = closeFullscreen;

    // Fermer l'image en cliquant en dehors
    fullscreenDiv.onclick = function(event) {
        if (event.target === fullscreenDiv) {
            closeFullscreen();
        }
    }

    // Ajouter l'image et le bouton de fermeture au div
    fullscreenDiv.appendChild(fullscreenImg);
    fullscreenDiv.appendChild(closeBtn);

    // Ajouter le div au corps du document
    document.body.appendChild(fullscreenDiv);

    // Empêcher le scroll de la page
    document.body.classList.add('no-scroll');
}

// Fonction pour fermer l'image en plein écran
function closeFullscreen() {
    var fullscreenDiv = document.querySelector('.fullscreen-image');
    if (fullscreenDiv) {
        fullscreenDiv.remove();
    }
    // Réactiver le scroll de la page
    document.body.classList.remove('no-scroll');
}