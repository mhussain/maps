function add_controls(map, home) {
    State.prototype.home_ = null;

    State.prototype.getHome = function() {
      return this.home_;
    }

    var victoria = new google.maps.LatLng(-37.79999924, 144.9833374);
    var nsw = new google.maps.LatLng(-33.86666489, 151.19999695);
    var sa = new google.maps.LatLng(-34.91999817, 138.6000061);

    var homeDiv= document.createElement('DIV');
    var homeControl = new State(map, homeDiv , home, "home");
    homeDiv.index = 1;

    var saDiv = document.createElement('DIV');
    var saControl = new State(map, saDiv , sa, "sa");
    saDiv.index = 2;

    var vicDiv = document.createElement('DIV');
    var vicControl = new State(map, vicDiv , victoria, "vic");
    vicDiv.index = 3;

    var nswDiv = document.createElement('DIV');
    var nswControl = new State(map, nswDiv , nsw, "nsw");
    nswDiv.index = 4;

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeDiv);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(vicDiv);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(saDiv);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(nswDiv);
}
