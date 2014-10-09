document.addEventListener("DOMContentLoaded", function (event) {

    var DragStripView = function() {
        // var vehicles = [
        //   "vehicle1", 
        //   "vehicle2", 
        //   "vehicle3", 
        //   "vehicle4"
        // ];
        
        // for (var i = 0; i < vehicles.length; i++) {
        //   new Vehicle(vehicles[i]).start();
        // }

        var vehicles = [
            {
                carId: "vehicle1",
                vehicleType: "ferrary",
                mass: 3735
            },
            {
                carId: "vehicle2",
                vehicleType: "bigTruck",
                mass: 7200
            },
            {
                carId: "vehicle3",
                vehicleType: "motorcicle",
                mass: 1000
            },
            {
                carId: "vehicle4",
                vehicleType: "myFordFocus",
                mass: 2935
            }
        ];

        for (var i = 0; i < vehicles.length; i++) {
          //var currentVehicle = new Vehicle(vehicles[i].theId, vehicles[i].vehicleType, vehicles[i].weight);
          var currentVehicle = new Vehicle(vehicles[i]);
          currentVehicle.start();
          currentVehicle.race();

        }

        
        // var ferrary = new Vehicle(vehicles[0].theId, vehicles[0].vehicleType, vehicles[0].weight);
        // var bigTruck = new Vehicle(vehicles[1].theId, vehicles[1].vehicleType, vehicles[1].weight);
        // var motorcycle = new Vehicle(vehicles[2].theId, vehicles[2].vehicleType, vehicles[2].weight);
        // var myFordFocus = new Vehicle(vehicles[3].theId, vehicles[3].vehicleType, vehicles[3].weight);


        // what can we do with the drag strip view
        // in order to be able to work with multiple vehicle views? 
        //
        // what else might be the responsibilities of the drag strip
        // view? 
        //
        // how might the vehicle views let the drag strip view
        // know what to do?
        //
        // what might be common between two view objects?
        //
        // should view objects exist in this file?
        // if not, where might they be? 
        // what do we have to do in index.html?
    };



    //var VehicleView = function (carId) {
    var VehicleView = function (vehiclePassed) {

		var $car = document.getElementById(vehiclePassed.carId);

		// $car.addEventListener("click", function () {
		// 	this.setAttribute("class", "in_finish_line");
		// });
    
        var distance = 0;
        var force = 10000;

        this.move = function() {


            var fn = function () {

                    // console.log(vehiclePassed);

                distance += Math.floor(force / parseInt(vehiclePassed.mass)); 

                        console.log("in move with ", "vehiclePassed.vehicleType = " + vehiclePassed.vehicleType);
                        console.log("vehiclePassed.mass = " + vehiclePassed.mass );
                        console.log("distance = " + distance );
                $car.style.left = distance + "px";
                if (distance >= 910) {

                    clearInterval(intevalId);
                };
            

            };

            var intevalId = setInterval( fn , 20);


            

            
        };

		// var advancePosition5 = function () {

		// 	var margin = $el.style.getPropertyValue('margin-left');
		// 	console.log(margin);

		// 	// $el.setAttribute('margin-left', '5px')
		// };
	};


    //var Vehicle = function (carId, vehicleType, mass){
    var Vehicle = function (vehiclePassed){

// console.log(vehiclePassed);
		//var view = new VehicleView(carId);
        var view = new VehicleView(vehiclePassed);

        this.mass = vehiclePassed.mass;
        this.vehicleType = vehiclePassed.vehicleType;

		var engine = {
			running: false
		};
		
		this.start = function () {
			engine.running = true;
		};

		this.stop = function () {
			engine.running = false;
		};

        this.race = function() {

                // console.log(vehiclePassed);
            view.move();
        }

		this.moveForward5 = function () {
			view.advancePosition5();
		};

	};



    window.Views = {
        DragStripView: DragStripView
    };





});


/*

program flow:
drag_race.js
    new window.Views.DragStripView(); 
vehicles.js
    new DragStripView() 
    new Vehicle()
    new VehicleView()

*/

