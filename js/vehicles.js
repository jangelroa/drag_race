document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function () {
    this.engine = {
      running: false
    };
    this.start = function() {
      this.engine.running = true;
    };
    this.stop = function() {
      this.engine.running = false;
    };
  };

  window.AvailableCars = {
    GoCar: function() {
    }, 
    Audi: function() {
    }, 
    Truck: function() {
    },  
    Motorcycle: function() {
    }
  };

  window.AvailableCars.GoCar.prototype = 
  window.AvailableCars.Audi.prototype = 
  window.AvailableCars.Truck.prototype = 
  window.AvailableCars.Motorcycle.prototype = 
    new Vehicle();
});
