function initMap() {
  // The location of Uluru
  const location = { lat: 53.767, lng: -0.354 };
  const map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: location });
  const marker = new google.maps.Marker({ position: location, map: map });
}
