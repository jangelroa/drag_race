document.addEventListener("DOMContentLoaded", function(event) {
  var DragStripView = function() {
    var vehicleIds = [
      "vehicle1", 
      "vehicle2", 
      "vehicle3", 
      "vehicle4"
    ];
    for (var i = 0; i < vehicleIds.length; i++) {
      new VehicleView(vehicleIds[i]);
    }
  };

  var VehicleView = function(carId) {
    var $el = document.getElementById(carId),
        $exhaust = $el.querySelector('.exhaust'),
        hideExhaust = function() {
          $exhaust.className += ' fade';
        },
        model = new window.Models.Vehicle();

    this.startRunning = function () {
      $exhaust.setAttribute('style', 'display: inline');
      window.setTimeout(hideExhaust, 2400);
    };

    this.move = function() {
      $el.className += ' move';
    };
  };

  window.Views = {
    DragStripView: DragStripView
  };
});
