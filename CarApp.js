angular.module('CarApp',[])

    .factory('CarFactory',[function(){
        return function (year, make, model, color) {
            this.year = year;
            this.make = make;
            this.model = model;
            this.color = color;
            this.printInfro = function() {
                var carInfo = 
                'Year: ' + this.year + '\n' +
                'make: ' + this.make + '\n' +
                'model: ' + this.model + '\n' +
                'color: ' + this.color 
                console.log(carInfo);
            }
        }
    }])

    .controller('MainCtrl',['$scope','CarFactory',function($scope,CarFactory){
        $scope.carInventory = [];
        $scope.addCar = function(year,make,model,color) {
            var car = new CarFactory(year,make,model,color)
            $scope.carInventory.push(car);
        }
        
       // $scope.printInventory = function () {
            //$scope.carInventory.map(function (car) {
              //  car.printInfro();
          //  })
            for (var i = 0; i < $scope.carInventory.length; i++) {
                var car = carInventory[i];
                car.printInfro();
            }
        }])
        
