document.addEventListener("DOMContentLoaded", function (event) {

	var VehicleView = function (carId) {

		var $car = document.getElementById(carId);

		$car.addEventListener("click", function () {
			this.setAttribute("class", "in_finish_line");
		});


		// var advancePosition5 = function () {

		// 	var margin = $el.style.getPropertyValue('margin-left');
		// 	console.log(margin);

		// 	// $el.setAttribute('margin-left', '5px')
		// };
	};


	var Vehicle = function (carId){


		var view = new VehicleView(carId);

		var engine = {
			running: false
		};
		
		this.start = function () {
			engine.running = true;
			console.log(engine.running);
		};

		this.stop = function () {
			engine.running = false;
			console.log(engine.running);
		};

		this.moveForward5 = function () {
			view.advancePosition5();
		};

	};

	window.AvailableCars = {
		vehicle1: new Vehicle("car1")
	};


});