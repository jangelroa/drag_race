document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function (carId) {
    var engine = { running: false }; 

    this.start = function() {
      engine.running = true;
    };

    this.race = function() {
    };

    this.stop = function() {
      engine.running = false;
    };
  };

  window.Models = {
    Vehicle: Vehicle
  };
});
