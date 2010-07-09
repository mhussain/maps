function State(map, div, home, state) {

  var controlDiv = div;

  var control = this;

  control.home_ = home;

  controlDiv.style.padding = '3px';

  var goHomeUI = document.createElement('DIV');
  goHomeUI.title = 'Go to ' + state.toUpperCase();
  goHomeUI.style.padding = '2px';
  goHomeUI.style.backgroundColor = 'white';
  goHomeUI.style.borderStyle = 'solid';
  goHomeUI.style.borderWidth = '1px';
  goHomeUI.style.cursor = 'pointer';
  goHomeUI.style.textAlign = 'center';
  controlDiv.appendChild(goHomeUI);

  var goHomeText = document.createElement('DIV');
  goHomeText.innerHTML = state.toUpperCase();
  goHomeUI.appendChild(goHomeText);

  var zoom = 6;
  if (state == 'AU') {
    zoom = 4;
  }

  google.maps.event.addDomListener(goHomeUI, 'click', function() {
    var currentHome = control.getHome();
    map.setCenter(currentHome);
    map.setZoom(zoom);
  });
}
