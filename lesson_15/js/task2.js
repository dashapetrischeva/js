"use strict";
if (confirm('Start testing?')) {
    document.write(`<h2 class="title-solution">Solution:</h2>`);
    class Auto {
        constructor(initBrand, initTankSize, initNumberOfAvailableLiters, initNumberOfSeats, initNumberOfPassengers) {
            this.brand = initBrand;
            this.tankSize = initTankSize;
            this.numberOfAvailableLiters = initNumberOfAvailableLiters;
            this.numberOfSeats = initNumberOfSeats;
            this.numberOfPassengers = initNumberOfPassengers;
        }
        refueling(numLiter) {
            if ((this.numberOfAvailableLiters + numLiter) <= this.tankSize)
                this.numberOfAvailableLiters += numLiter;
            else
                this.numberOfAvailableLiters = this.tankSize;
        }
        getNumberPassengers() {
            return this.numberOfPassengers;
        }
        addingPassengers(numPassengers) {
            if ((this.numberOfPassengers + numPassengers) <= this.numberOfSeats)
                this.numberOfPassengers += numPassengers;
            else
                this.numberOfPassengers = this.numberOfSeats;
        }
        disembarkingPassengers(numPassengers) {
            if ((this.numberOfPassengers - numPassengers) >= 0)
                this.numberOfPassengers -= numPassengers;
            else
                this.numberOfPassengers = 0;
        }
    }
    const myAuto = new Auto("Mercedes", 70, 20, 5, 1);
    myAuto.refueling(100);
    console.log(myAuto.numberOfAvailableLiters);
    myAuto.addingPassengers(5);
    console.log(myAuto.numberOfPassengers);
    myAuto.disembarkingPassengers(2);
    console.log(myAuto.numberOfPassengers);
    document.write(`<div>4) Answer in the console</div>`);
}
