"use strict";
if (confirm('Start testing?')) {
    document.write(`<h2 class="title-solution">Solution:</h2>`);
    class CompanyCar {
        constructor(initDriver, initBrand, initNumber) {
            this.driver = '';
            this.brand = '';
            this.number = '';
            if (CompanyCar.objCompanyCar)
                return CompanyCar.objCompanyCar;
            this.driver = initDriver;
            this.brand = initBrand;
            this.number = initNumber;
            CompanyCar.objCompanyCar = this;
        }
        toString() {
            return `<div>Driver: ${this.driver}, brand:${this.brand}, license plate:${this.number}</div>`;
        }
    }
    const companyCar1 = new CompanyCar('Oleksiy Petrov', 'Toyota Corolla', 'AB1234CD');
    document.write(companyCar1.toString());
    const companyCar2 = new CompanyCar('Ivan Kovalenko', 'Ford Transit', 'CD9012GH');
    document.write(companyCar2.toString());
}
