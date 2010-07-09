function add_controls(map, home) {
    State.prototype.home_ = null;

    State.prototype.getHome = function() {
      return this.home_;
    }

    var states = [];
    var stateNames = new Array();
    states.push(home);
    stateNames[0] = "AU";

    var vic = new google.maps.LatLng(-37.79999924, 144.9833374);
    states.push(vic);
    stateNames[1] = "VIC";

    var nsw = new google.maps.LatLng(-33.86666489, 151.19999695);
    states.push(nsw);
    stateNames[2] = "NSW";

    var sa  = new google.maps.LatLng(-34.91999817, 138.6000061);
    states.push(sa);
    stateNames[3] = "SA";

    var tas = new google.maps.LatLng( -42.88700104, 147.29499817);
    states.push(tas);
    stateNames[4] = "TAS";

    var qld = new google.maps.LatLng(-27.46784973, 153.02606201);
    states.push(qld);
    stateNames[5] = "QLD";

    var nt  = new google.maps.LatLng(-12.46166706, 130.84165955);
    states.push(nt);
    stateNames[6] = "NT";

    var act = new google.maps.LatLng(-35.29999924, 149.1333313);
    states.push(act);
    stateNames[7] = "ACT";

    $.each(states, function(index, state) {
        var div = document.createElement('DIV');
        var control = new State(map, div, state, stateNames[index]);
        div.index = index + 1;
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(div);
    });
}
