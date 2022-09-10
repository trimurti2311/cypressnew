/*
var x = 3;
var y = "hi";
var c=x - y
console.log(c)// output Nan

var x = 3;
var y = "4";
var c=x - y
console.log(c)// Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, //
             // a string is converted to a number and then subtraction takes place

// falsy value: false,NaN,0,undefined,null,false,"",on,-0

if(NaN){
    console.log("hi")
}
else{
    console.log("Bye")
}
  if(0){
    console.log("hi")
}
else{
    console.log("Bye")
}
//
/// And 
//1  1=====>true
//0  1=====>false 
//1  1=====>false 
//0  0=====>false 


// OR
//1  1=====>true
//0  1=====>true 
//1  1=====>true
//0  0=====>false 




//javascript is dynamic typing langauge
//dynamic= javascript,php,python,ruby
//static=c,c++,java

let name="archana"
name="pallavi"
console.log(name)
name=23
console.log(name)
name={
    firstName:"pallavi",
    lastname:"ransing"
}
console.log(name)

//q.9)

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false) )// Returns false
isNaN(undefined) // Returns true
console.log(isNaN('23'))


//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.
// primitive ==>generate memory location seperate
//non primitive ===>generate reference

// non primitive
let nameNi={
    firstName:"aa",
    lastname:"bb"

}
let cc=nameNi
cc.firstName="kk"
nameNi.lastname="pp"
console.log(cc)
console.log(nameNi)

//primitive
let x1=10  //#1000
let y1=x1   //#1002
x1=122
y1=x1
console.log(y1)*/

//higher order function


function higherOrder(a) {
  a();
}

higherOrder(function () { console.log("Hello world") })

//program 2)

function higherOrder2() {
  return function () {
    console.log("Do something");
  }
}

var x = higherOrder2();
console.log(x)
x()
//console.log(x())   
// let z=x()
// console.log(z)


// this keyword

// program 1)
function let() {
  let a = 10
  let b = 20
  let c = a + b
  console.log(c)
}
let()
function shiv() {
  console.log(this);
}
   
shiv()

//program2)
var obj = {
  name:  "vivek",
  getName: function(){
  console.log(this.name);
}
   
}

var getName = obj.getName;
     console.log(getName
      )
var obj2 = {name:"akshay", getName };
obj2.getName();


//program 3)
var obj1 = {
  address : "Mumbai,India",
  getAddress: function(){
  console.log(this.address); 
}
}
 
var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay"};
// obj2.getAddress();


//exec()
// let st="aaa1aaa111aaa"
// let p=st.exec()
// console.log(p)


let text = "The best things in life are free";
let result = /e/.exec(text);
console.log(result)


