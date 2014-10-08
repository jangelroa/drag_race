document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function (carId, mass, pole) {
    var engine = { running: false }; 

    this.carId = carId; 
    this.mass = mass;
    this.pole = pole;

    this.start = function() {
      engine.running = true;

      Object.getNotifier(this).notify({
        type: 'start'
      });
    };

    this.race = function(initial, elapsed) {
      // if F = m * a and force is constant, then: a = F/m
      // F is measured in Newtowns.
      // 1 N = 1kg * (m/s)^2
      //
      // so if we have mass, and we assume that force is constant:
      // a = F / m 
      // let's just say that our engine produces 1 N of force
      // a = 1 / m
      //
      // given that we know acceleration, we can tell the distance
      // traveled after a period of time via this formula:
      // x = v0 * t + 1/2 * a * t^2 
      initial = initial || Date.now();
      elapsed = Date.now() - initial;
      
      this.position = Math.floor(this.pole + 
        (0 * elapsed + 1/2 * 1/this.mass * Math.pow(elapsed,2)) / 1000);
      
      if (this.position < this.raceTrackWidth) {
        // we should fire an event every time x changes
        Object.getNotifier(this).notify({
          type: 'moved'
        });
      
        window.setTimeout((this.race).bind(this), 1, initial, elapsed);
      } 
    };

    this.stop = function() {
      engine.running = false;
    };
  };

  window.Models = {
    Vehicle: Vehicle
  };
});
