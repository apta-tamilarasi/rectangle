
class ParentRectangle{
    constructor(h,w){
        this.height=h
        this.width=w
    }

    area(){
        let area=this.height*this.width
        document.write(`Height: ${this.height} and Width: ${this.width}<br>`)
        document.write(`Area = ${area} <br>`)

    }

    perimeter(){

        let peri=2*(this.height+this.width)
        document.write(`Perimeter = ${peri} <br><br>`)

    }
}

let rec1=new ParentRectangle(parseFloat(prompt("Enter the Height of Rectangle - 1")), parseFloat(prompt("Enter the Width of Rectangle -1")))
let rec2=new ParentRectangle(parseFloat(prompt("Enter the Height of Rectangle - 2")), parseFloat(prompt("Enter the Width of Rectangle -2")))
rec1.area()
rec1.perimeter()

rec2.area()
rec2.perimeter()