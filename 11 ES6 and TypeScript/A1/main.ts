/*
1.	Constants: Declare a constant & confirm its value cannot be changed.
2.	Scoping: Declare a variable inside if condition & make sure that it is not accessible outside if condition.
3.	Enhanced object properties: 
Create an ‘Order’ object having data 
members ‘id’, ‘title’, ‘price’. 
Add the methods printOrder() & getPrice().
 Now, copy the order object using 
 Object.assign().
 */
const x =10;
if(x==10){
    let y = true;
    console.log(y);
    
}
//console.log(y);
let order  ={
    id:1,
    title:"the so Title",
    price:100,
    printOrder: function(){
        console.log(order);
    },
    getPrice:function() {
        return this.price;
    }
}
console.log(order);
console.log(order.getPrice());
order.printOrder();
const orderClone = {};
Object.assign(orderClone, order);

console.log(orderClone);

/*
4.	Arrow functions: Take an array of strings & convert it into another array of object
 which has two properties {string, string_length}. 
 For example: 
 let names = [‘Tom’, ‘Ivan’, ‘Jerry’]
Output: [ {name: ’Tom’, length: 3}, {name: ’Ivan’, length: 4 }, {name: ’Jerry’, length: 5} ]
 */



let stAr = ['Tom','Ivan','Jerry'];
let obAr = stAr.map((str,length) => [{name:str, length:str.length}]);
console.log(obAr);

/*
5.	Extended parameter handling:
    a.	Write a add() with default values.
    b.	Write a function userFriends() that takes 2 arguments username & array of user friends. 
    The function should print username & his list of friends. (Use rest parameters)
    c.	Write a function printCapitalNames() that takes five names as argument & prints them 
    in capital letters. Use spread operator in order to call printCapitalNames() function.
*/
let Obj = {
    add: function(num1=10,num2=20) {
        return num1+num2;
    },
    userFriends: function(username:string, ...userFriends:string[]) { //need not to mention type
        console.log(username);
        console.log(userFriends);
    },
    printCapitalNames: function(...names:string[]){
        names.forEach(i=>console.log(i.toUpperCase()));
    }
}
console.log(Obj.add(5,6));
console.log(Obj.add());
//let ufrnds = ['tom','jerry','nobita','madhu'];
let user = 'Vunnam';
Obj.userFriends(user,'tom','jerry','nobita','shinchan');
Obj.printCapitalNames('Netflix','Prime','hulu','aalu','golu');

/*6
    6.	Template literals: Draft a ticket to Sysnet 
    that describes problem with your laptop. 
    Use ‘template literals’ to add value of laptop model, 
    your desk no, your name etc.
*/
let laptopModel = "Asus VivoBook Gaming X5102L";
let myDeskNo = 8;
let myName = "Vunnam Lakshminarayana";
let ticket = `Hello message I am ${myName} and my Desk no is ${myDeskNo} and My System model is ${laptopModel} and the ticket message`;
/* this ticket will be drafted to Sysnet */ //Use backticks only
/*Lets us see the ticket message*/
console.log(ticket);

//7
/*
    7.	De-structuring assignment:
        a.	Suppose there is a javascript array with 4 elements. 
        Print the value of 3rd element using array matching.
        b.	Create an organization object having attributes name, address. 
        Write a program to retrieve pin code of an address using object deep matching.

 */
let myArr = ['Hi','Hello','How','are'];
let [first,second,third,forth] = myArr;
console.log(third);

let obje = {
    name1:"ghost",
    address: {
        hNo:13,
        city:"Evadki telusu bro",
        zipcode:12345
    }
}
let {name1,...address} = obje;
console.log(JSON.stringify(address));
console.log(address.address.zipcode); //object object
///
/*
8.	Classes & Modules: Write a class Account with attributes id, name, balance. 
    Add two sub classes SavingAccount & CurrentAccount having specific attribute 
    interest & cash_credit respectively. 
    Create multiple saving & current account objects. Write a functionality 
    to find out total balance in the bank.
*/
class Account{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    ToString(){
        return `{id: ${this.id}, name: ${this.name}, balance:${this.balance}}`
    }
}
class SavingsAccount extends Account{
    interest(){

    }
    cash_credits(){

    }
}
class CurrentAccount extends Account{
    interest(){

    }
    cash_credits(){
        
    }
}

let sa = new SavingsAccount(1,"nani",200000);
let ca = new CurrentAccount(1,"nani",16000);
console.log(sa);
console.log(ca);
console.log(sa.ToString());
console.log(ca.ToString());








