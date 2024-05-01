// PARENT CLASS
class Shape {
    constructor(shape,color){
        this.shape = shape;
        this.colour = color;
    }
    type(){
        console.log("Type of shape is: ",this.shape)
    }
    color(){
        console.log("Color of shape is: ",this.colour);
    }
}

// super --> this keyword is used to call upper level constructor (like or child --> upper level is parent). 
        // --> if we are calling the child constructor then there should be call for parent constructor by super keyword.
        // --> to pass any parameter from child constructor to parent constructor we can pass it in super keyword as an argument.

// CHILD CLASS
    // exnteds keyword is used to inherit the property of parent class.
class Rectangle extends Shape{
	constructor(height, breadth,shape,color){
        super(shape,color);
		this.height = height;
		this.breadth = breadth;
	}
    
    heightCheck(){
        console.log("Height of Rectangle is:", this.height);
    }
    breadthCheck(){
        console.log("Breadth of Rectangle is:", this.breadth);
    }
	area(){
		console.log("Area is",this.height * this.breadth); // Note the correction here
	}

}


// Example usage:
const rectangle = new Rectangle(5, 10, "Rectangle","Green");
const shape = new Shape("Circle")




// practise question 1 

class User {
    constructor(userName, email){
        this.userName = userName;
        this.email = email;
    }
    viewDetail(){
        console.log("Website Data", this.userName, this.email)
    }
}

let user1 = new User("Akash", "akash.1100@gmail.com")
