document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function (carId) {
    var engine = { running: false }; 

    this.carId = carId;

    this.start = function() {
      engine.running = true;

      Object.getNotifier(this).notify({
        type: 'start'
      });
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
