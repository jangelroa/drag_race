document.addEventListener("DOMContentLoaded", function(event) {
  var Vehicle = function () {
    this.start = function() {
      console.log(this.speed);
    };
  };

  var GoCar = function () {
  }, Audi = function() {
  }, Truck = function() {
  };

  GoCar.prototype = 
    Audi.prototype = 
    Truck.prototype = 
      new Vehicle();

  var g = new GoCar();
});
