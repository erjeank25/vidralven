function iniciarMap(){
    var coord = {lat: 10.1766898,lng: -68.0075087};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 100,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
