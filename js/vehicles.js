document.addEventListener("DOMContentLoaded", function(event) {
  var VehicleView = function() {
    var $el = document.getElementById('vehicle'),
        $exhaust = document.getElementById('exhaust');

    this.startRunning = function () {
      $exhaust.setAttribute('style', 'display: inline');
      window.setTimeout(function() {
        $exhaust.className = 'fade';
      }, 2400);
    };
  };

  var Vehicle = function () {
    var engine = { running: false }, 
        view = new VehicleView();

    this.start = function() {
      engine.running = true;
      view.startRunning();
    };

    this.stop = function() {
      engine.running = false;
    };
  };

  window.AvailableCars = {
    vehicle: new Vehicle()
  };
});
