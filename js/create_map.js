function create_map(map, fluster, suburbs) {

  var icons = create_icons();

  $.each(suburbs, function(index, obj) {

    suburb = obj.Suburb.toLowerCase();

    var link = "http://www.realestate.com.au/buy/in-" + suburb.replace(' ', '+') + "/list-1";

    var desc = "<table rules='all' align='justify'> \
    <tr> \
    <th>ID</th> \
    <th>State</th> \
    <th>Postcode</th> \
    <th>Suburb</th> \
    <th>View Properties</th> \
    </tr> \
    <tr> \
    <td>" + obj.LocationID + "</td> \
    <td>" + obj.State.toUpperCase() + "</td> \
    <td>" + obj.Postcode + "</td> \
    <td>" + suburb + "</td> \
    <td><a href='" + link + "'>Properties list</a> </td> \
    </tr> \
    </table>";

    var infowindow = new google.maps.InfoWindow({
      content: desc
    });

    var latlng = new google.maps.LatLng(obj.Latitude, obj.Longitude);

    var marker = new google.maps.Marker({
      position: latlng,
      icon: icons[obj.State],
      title: obj.Suburb + '-' + obj.Postcode
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    fluster.addMarker(marker);
  });

  add_styles_to_fluster(fluster);
}

function create_icons() {
    var icons = new Object();
    var states = ['vic', 'sa', 'qld', 'nt', 'tas', 'nsw', 'wa', 'act'];
    var image, state;

    for (index in states) {
      switch(states[index]) {
        case 'qld': image =  "/images/google-icons/icons/sun.png"; break;
        case 'wa': image =  "/images/google-icons/icons/mine.png"; break;
        case 'sa': image =  "/images/google-icons/icons/church.png"; break;
        case 'vic': image =  "/images/google-icons/icons/stadium.png"; break;
        case 'nsw': image =  "/images/google-icons/icons/bridgemodern.png"; break;
        case 'act': image =  "/images/google-icons/icons/embassy.png"; break;
        case 'tas': image =  "/images/google-icons/icons/water.png"; break;
        case 'nt': image =  "/images/google-icons/icons/aircraft-small.png"; break;
        default: image = "/images/google-icons/icons/beautiful.png"; break;
      }

      icons[states[index]] = new google.maps.MarkerImage(image)
    }
    return icons;
}

function add_styles_to_fluster(fluster) {
  fluster.styles = {
    0: {
      image: 'http://gmaps-utility-library.googlecode.com/svn/trunk/markerclusterer/1.0/images/m1.png',
      textColor: '#FFFFFF',
      width: 53,
      height: 52
    },
    50: {
      image: 'http://gmaps-utility-library.googlecode.com/svn/trunk/markerclusterer/1.0/images/m2.png',
      textColor: '#FFFFFF',
      width: 56,
      height: 55
    },
    100: {
      image: 'http://gmaps-utility-library.googlecode.com/svn/trunk/markerclusterer/1.0/images/m3.png',
      textColor: '#FFFFFF',
      width: 66,
      height: 65
    }
  };
}
