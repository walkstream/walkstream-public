function openModal(videoId, videoUrl) {
    const modal = document.getElementById('myModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const videoContainer = document.getElementById('videoContainer');

    const buttons = document.querySelectorAll('.watch-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const videoEmbed = button.getAttribute('data-video');
            videoContainer.innerHTML = `<div style="position:relative;padding-bottom:56%;padding-top:20px;height:0;"><iframe src="${videoEmbed}" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="640" height="360" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`;
            modal.style.display = 'block';
        });
    });

    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        videoContainer.innerHTML = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoContainer.innerHTML = '';
        }
    });

    const watchButtons = document.querySelectorAll('.watch-button');

    watchButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const videoId = this.getAttribute('data-video-id');
            const videoUrl = this.getAttribute('data-video-url');
            openModal(videoId, videoUrl);
        });
    });

    const closeModalButton = document.querySelector('.close');
    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        const modal = document.getElementById('myModal');
        if (event.target == modal) {
            closeModal();
        }
    });

    const searchOverlay = document.getElementById('search-overlay');
    const searchInputOverlay = document.getElementById('search-input-overlay');

    function toggleSearch() {
        const searchOverlay = document.getElementById('search-overlay');
        searchOverlay.style.display = (searchOverlay.style.display === 'none' || searchOverlay.style.display === '') ? 'flex' : 'none';
    
        if (searchOverlay.style.display === 'flex') {
            const searchInputOverlay = document.getElementById('search-input-overlay');
            searchInputOverlay.focus();
            // Appeler performSearch() lors de l'ouverture de la barre de recherche
            performSearch();
        }
    }
    

    searchInputOverlay.addEventListener('input', performSearch);

    function performSearch() {
        const searchValue = searchInputOverlay.value.trim().toLowerCase();
        const films = document.querySelectorAll('.film');

        films.forEach(function (film) {
            const filmTitle = film.querySelector('h2').textContent.trim().toLowerCase();
            const filmAlt = film.querySelector('.film-img').getAttribute('alt').trim().toLowerCase();

            const isMatch = filmTitle.includes(searchValue) || filmAlt.includes(searchValue);

            film.style.display = isMatch ? 'block' : 'none';
        });
    }

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', toggleSearch);
});
function closeSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le bouton du menu déroulant
    var dropdownButton = document.querySelector('.dropdown .dropdown-button');
    
    // Sélectionnez la liste déroulante
    var dropdownContent = document.querySelector('.dropdown .dropdown-content');

    // Ajoutez un écouteur d'événements pour le clic
    dropdownButton.addEventListener('click', function () {
        // Basculez simplement la visibilité
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});
