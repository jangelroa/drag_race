document.addEventListener("DOMContentLoaded", function(event) {
  var vehicleIds = [
    "vehicle1", 
    "vehicle2", 
    "vehicle3", 
    "vehicle4"
  ];
   
  var vehicles = new window.Collections.Vehicles(vehicleIds);

  new window.Views.DragStripView(vehicles);

  vehicles.startAll();
});
