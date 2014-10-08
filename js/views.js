document.addEventListener("DOMContentLoaded", function(event) {
  var raceTrackWidth = 
    Math.floor(window.innerWidth - 
      parseInt(
        window.getComputedStyle(
          document.getElementById('finish_line'))['margin-right'], 10)
    ) + 1;

  var DragStripView = function(collection) {
    this.collection = collection;
    this.vehicles = this.collection.vehicles;
    this.vehicleViews = [];

    this.vehicles.forEach((function(v) {
      v.raceTrackWidth = raceTrackWidth;
      this.vehicleViews.push(new VehicleView(v)); 
    }).bind(this));

    var startAll = (function() {
      this.vehicles.forEach((function(v) {
        v.start();
      }));
    }).bind(this);

    var beginRace = (function() {
      this.vehicles.forEach((function(v) {
        v.race();
      }));
    }).bind(this);

    Object.observe(this.collection, startAll, ['start-all']);
    Object.observe(this.collection, beginRace, ['begin-race']);
  };

  var VehicleView = function(model) {
    var $el = document.getElementById(model.carId),
        $exhaust = $el.querySelector('.exhaust'),
        hideExhaust = function() {
          $exhaust.className += ' fade';
        },
        start = function () {
          $exhaust.setAttribute('style', 'display: inline');
          window.setTimeout(hideExhaust, 2400);
        },
        move = (function() {
          if (this.model.position < raceTrackWidth) {
            $el.style.left = this.model.position + 'px';
          }
        }).bind(this);

    this.model = model; 
    
    Object.observe(this.model, start, ['start']);
    Object.observe(this.model, move, ['moved']);
  };

  window.Views = {
    DragStripView: DragStripView
  };
});
