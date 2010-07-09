function createGeocoderControl(map) {
    var control = document.createElement('input');
    control.style.fontSize = '10pt';
    control.style.margin = '5px';
    control.onkeyup = submitGeocode(control, map);
    control.style.color = "#808080";
    control.value = "Enter location...";
    control.onfocus = function() {
        control.style.color = "#000000";
        control.value = "";
    }
    control.onblur = function() {
        control.style.color = "#808080";
        control.value = "Enter location...";
    }
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(control);
}

function submitGeocode(control, map) {
  return function(e) {
    var keyCode;
    var geocoder = new google.maps.Geocoder();

    if (window.event) {
      keyCode = window.event.keyCode;
    }
    else if (variable) {
      keyCode = e.which;
    }

    if (keyCode == 13) {
      geocoder.geocode( { address: control.value }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //map.fitBounds(results[0].geometry.viewport);
          var location = results[0].geometry.location;
          var lat = location.b;
          var lng = location.c;
          var center = new google.maps.LatLng(lat, lng);
          map.setCenter(center);
          map.setZoom(9);
        }
        else {
          alert("The location entered could not be found");
        }
      })
    }
  }
}
