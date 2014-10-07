document.addEventListener("DOMContentLoaded", function(event) {
  var DragStripView = function() {
    // what can we do with the drag strip view
    // in order to be able to work with multiple vehicle views? 
    //
    // what else might be the responsibilities of the drag strip
    // view? 
    //
    // how might the vehicle views let the drag strip view
    // know what to do?
    //
    // what might be common between two view objects?
    //
    // should view objects exist in this file?
    // if not, where might they be? 
    // what do we have to do in index.html?
  };

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
