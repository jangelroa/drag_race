document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function () {
    var engine = {
      running: false
    };

    this.start = function() {
      engine.running = true;
    };

    this.stop = function() {
      engine.running = false;
    };
  };

  window.AvailableCars = {
    vehicle: new Vehicle()
  };
});
