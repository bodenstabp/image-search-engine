baguetteBox.run('.grid-layout');

// Search Bar

function searchItems () {
    const input = document.getElementById('searchBar');
    const toLower = input.value.toLowerCase();
    const images = document.getElementsByClassName('img-container');
    
    for ( let i = 0; i < images.length; i++ ) {
        const captions = document.getElementsByTagName('a')[i].getAttribute('data-caption');

        if (captions.toLowerCase().indexOf(toLower) > -1) {
            images[i].style.display = '';
        } else {
            images[i].style.display = 'none';
        }
    }
}
