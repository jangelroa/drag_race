document.addEventListener("DOMContentLoaded", function(event) {
  var DragStripView = function(collection) {
    this.collection = collection;
    this.vehicles = this.collection.vehicles;
    this.vehicleViews = [];

    this.vehicles.forEach((function(v) {
      this.vehicleViews.push(new VehicleView(v)); 
    }).bind(this));

    var startAll = (function() {
      this.vehicles.forEach((function(v) {
        v.start();
      }));
    }).bind(this);

    Object.observe(this.collection, startAll, ['start-all']);
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
        };

    this.model = model; 
    
    this.move = function() {
      $el.className += ' move';
    };

    Object.observe(this.model, start, ['start']);
  };

  window.Views = {
    DragStripView: DragStripView
  };
});
