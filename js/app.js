baguetteBox.run('.grid-layout');

// Search Bar

function searchItems () {
    const input = document.getElementById('searchBar');
    const toUpper = input.value.toLowerCase();
    const images = document.getElementsByTagName('img')
    
    for(i = 0, i < images, i++){
        const captions = document.getElementsByTagName('a')[i].getAttribute('data-caption');
    }
}

searchItems()