document.addEventListener("DOMContentLoaded", function(event) {
  var DragStripView = function() {
    var vehicles = [
      "vehicle1", 
      "vehicle2", 
      "vehicle3", 
      "vehicle4"
    ];
    for (var i = 0; i < vehicles.length; i++) {
      new Vehicle(vehicles[i]).start();
    }
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

  var VehicleView = function(carId) {
    var $el = document.getElementById(carId),
        $exhaust = $el.querySelector('.exhaust'),
        hideExhaust = function() {
          $exhaust.className += ' fade';
        };

    this.startRunning = function () {
      $exhaust.setAttribute('style', 'display: inline');
      window.setTimeout(hideExhaust, 2400);
    };

    this.move = function() {
      $el.className += ' move';
      
      // $el.style.left = "500px";
    }
  };

  var Vehicle = function (carId) {
    var engine = { running: false }, 
        view = new VehicleView(carId);

    this.start = function() {
      engine.running = true;
      view.startRunning();
    };

    this.race = function() {
      view.move();
    }

    this.stop = function() {
      engine.running = false;
    };
  };

  window.Views = {
    DragStripView: DragStripView
  };
});
