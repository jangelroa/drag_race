document.addEventListener("DOMContentLoaded", function(event) {
  var VehicleView = function() {
    var $el = document.getElementById('vehicle1'),
        $exhaust = $el.querySelector('.exhaust'),
        hideExhaust = function() {
          $exhaust.className += ' fade';
        };

    this.startRunning = function () {
      $exhaust.setAttribute('style', 'display: inline');
      window.setTimeout(hideExhaust, 2400);
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
