document.addEventListener("DOMContentLoaded", function(event) {
  var available = window.AvailableCars,
      inRace = [
        new available.GoCar(), 
        new available.Motorcycle(),
        new available.Audi(),
        new available.Truck()
      ];
});
