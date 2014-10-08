document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicles = function(vehicleIds) {
    this.vehicles = [];
    for (var i = 0; i < vehicleIds.length; i++) {
      this.vehicles.push(new window.Models.Vehicle(vehicleIds[i]));
    }

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
