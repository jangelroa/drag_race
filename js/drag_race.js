document.addEventListener("DOMContentLoaded", function(event) {
  var vehiclesEnteringRace = [
    { id: "vehicle1", mass: 26, pole: 30}, 
    { id: "vehicle2", mass: 30, pole: 30}, 
    { id: "vehicle3", mass: 32, pole: 30}, 
    { id: "vehicle4", mass: 33, pole: 30}
  ];
   
  var vehiclesInRace = new window.Collections.Vehicles(vehiclesEnteringRace);

  new window.Views.DragStripView(vehiclesInRace);

  document.getElementById('start_race').addEventListener(
    'click', 
    function(event) {
      vehiclesInRace.startAll();
      vehiclesInRace.race();
    }
  );
});
