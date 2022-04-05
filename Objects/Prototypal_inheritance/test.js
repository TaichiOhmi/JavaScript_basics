

    

    class Shape {

        name;
        sides;
        sideLength;
      
      constructor(name, sides, sideLength) {
          this.name = name;
          this.sides = sides;
          this.sideLength = sideLength;
        }
      
      calcPerimeter(){
      console.log(this.sides * this.sideLength);
      }
      
      }
      
    class Square extends Shape{
    constructor(sideLength){
    super('square', 4, sideLength);
    
    }
    
    calcArea(){
    console.log(this.sideLength**2);
    }
    }
    
    let square = new Square(2);
    square.calcArea();
    square.calcPerimeter();
    