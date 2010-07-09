function create_map(map, fluster, suburbs) {

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

    var image = new google.maps.MarkerImage(
      '/images/google-icons/icons/forest.png'
    );

    var marker = new google.maps.Marker({
      position: latlng,
      icon: image,
      title: obj.Suburb + '-' + obj.Postcode
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    fluster.addMarker(marker);
  });

  add_styles_to_fluster(fluster);
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
