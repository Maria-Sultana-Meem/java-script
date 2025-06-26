//!...............spread and rest operator..............

//^........spread..........

const numbers = [1,2,3,4,5,6] 
console.log(numbers);
const numbers1 = [...numbers, 7,8,9,10]
console.log(numbers1);

//object

const person = {
        name: 'Soyeb',
        FathersName : 'Abul Quashem', 
}

console.log(person);
 person.Age = 21;
console.log(person);
const personInfo = {...person, Age:21}  
console.log(personInfo);

//^.......rest..........

const numbers2= [10,20,30,40, 50, 60,70, 80, 90, 100]

const [first, second,  ...rest] = numbers2 // destructure 
console.log(first);
console.log(second);
console.log(rest);

//!.........default function parameters..........

const price = (price, vat=0, discount=0)=>{
    return (price + vat) - discount;
}

console.log(price( 100));

//!............this keyword...........

const intuduceMySelf = {
    Name: 'Soyeb', 
    FathersName: 'Abul Kashem',
    Age: 41,
    speak: function(){
        console.log('Hello this is ' + this.Name);
    }
}
intuduceMySelf.speak()


//!...........Class and Object..........


		class Product {
       constructor(price, qnty, color ){
        this.price = price;
        this.quantity= qnty;
        this.color=color;
  				  }

  				 make(){
  		 			 console.log( this.price, this.quantity, this.color);
 				  }
}
const product1= new Product(100, 10, 'Black')
console.log(product1);



class Product2{

 constructor(price,qnty,color){
    this.price=price
    this.qnty=qnty
    this.color=color
 }
 make(){
    console.log(this.price,this.qnty,this.color);
    
 }

}
const newProduct= new Product2(200,5,'green')
console.log(newProduct);




