//getArea method
//Not Es6 so doing the above question with constructor functions way
function Rectangle (width,height){
    this.width = width;
    this.height = height;
}
let r1 = new Rectangle(5,6);
console.log(r1.width,r1.height);
r1.height +=10;
console.log(r1.width,r1.height);
r1.getArea=function(){
    return r1.width*r1.height;
}
console.log(r1.getArea());
/*
3. Assuming that the Rectangle constructor takes a width and a height, why does the following output
20 instead of 200? (Hint: if you see an answer that seems too obvious to be what I am looking for,
it probably is the answer I am looking for.)
Rectangle r = new Rectangle(4, 5);
r.hieght = 50;
r.getArea(); --> 20 // Not 200
*/

//Solution
/**
 * Its  obvious hieght is not height its just tricking our eyes
 * it will create new property with hieght and assign 50
 * but we are not using that new value for getting area
 * 
 */