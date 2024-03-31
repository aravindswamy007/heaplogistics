function Pen(name,color,price){
  this.name = name;
  this.color = color;
  this.price = price;
}

const nataraj = new Pen('nataraj','blue',10);
console.log(nataraj);

Pen.prototype.showPrice = function(){
  console.log(`the price of ${this.name} is ${this.price}`);
}

nataraj.showPrice();

class Car{
  constructor(name,model,year,fuelType){
    this.name = name;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }

  display(){
    console.log(`the ${this.name} of ${this.year} year is of fueltype ${this.fuelType} and make is ${this.model}`);
  }
}

const toyota = new Car('toyota','glanza',2024,'petrol');
toyota.display();



class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        //Defaults which can be changed by the subclass class.
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";
    }

    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};
}

const newChair = new Chair();

newChair;

class OfficeChair extends Chair{
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle){
        super();
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.isMovable = true;
    }

    adjustableHeight(height){
        if(height > this.seatHeight){
            console.log(`Chair height changed to ${height}`);
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }

    adjustAngle(angle){
        if(angle >= this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`);
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }

    moveChair(x,y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10,20));;
