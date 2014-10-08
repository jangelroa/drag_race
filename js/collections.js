document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicles = function(vehicleIds) {
    this.vehicles = [];
    vehicleIds.forEach((function(id) {
      this.vehicles.push(new window.Models.Vehicle(id));
    }).bind(this));

    this.startAll = function() {
      Object.getNotifier(this).notify({
        type: 'start-all'
      });
    };
  };

  window.Collections = {
    Vehicles: Vehicles
  };
});
