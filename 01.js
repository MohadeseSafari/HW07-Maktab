/*Your task is to create a Circle constructor that creates a circle with a radius provided by an
argument. The circles constructed must have two methods getArea() (PI*r^2) and
getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference)*/

function circle (radius){
    this.radius = radius;
    

    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2)
    };

    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };

}

let circle1 = new circle(4);
console.log(`CircleArea: ${circle1.getArea()}`);
console.log(`CirclePerimeter: ${circle1.getPerimeter()}`);