function initMap () {
    
    const favPos1 = {
        lat: -34.6432532,
        lng: -58.4812408
    }
    const favPos2 = {
        lat: -34.6334001,
        lng: -58.4836322
    }
    const favPos3 = {
        lat: -34.6086843,
        lng: -58.3730745
    }

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: favPos1
    })

        markerFav1 = new google.maps.Marker ({
        position: favPos1,
        map,
        title: 'Posicion favorita 1'
    })
    markerFav2 = new google.maps.Marker ({
        position: favPos2,
        map,
        title: 'Posicion favorita 2'
    })
    markerFav3 = new google.maps.Marker ({
        position: favPos3,
        map,
        title: 'Posicion favorita 3'
    })
}