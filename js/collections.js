document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicles = function(vehicles) {
    this.vehicles = [];
    vehicles.forEach((function(v) {
      this.vehicles.push(new window.Models.Vehicle(v.id, v.mass, v.pole));
    }).bind(this));

    this.startAll = function() {
      Object.getNotifier(this).notify({
        type: 'start-all'
      });
    };

    this.race = function() {
      Object.getNotifier(this).notify({
        type: 'begin-race'
      });
    };
  };

  window.Collections = {
    Vehicles: Vehicles
  };
});
