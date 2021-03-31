/*
Make a Rectangle class that stores 
a width and a height. Make a few 
instances and print out the
properties. Modify a few of the 
properties and print out the results again.
*/
//Not Es6 so doing the above question with constructor functions way
function Rectangle (width,height){
    this.width = width;
    this.height = height;
}
let r1 = new Rectangle(5,6);
console.log(r1.width,r1.height);
r1.height +=10;
console.log(r1.width,r1.height);
let r2 = new Rectangle(5,8);
console.log(r2.width,r2.height);
r2.height +=20;
console.log(r2.width,r2.height);