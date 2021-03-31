/*
1.	Promises: Create 2 promises, one generates value of x & another generates value of you. Write a program to print sum of x & y. (Use Promise.all)
2.	TypeScript classes & types: Write a class Account with attributes id, name, balance. Add two sub classes SavingAccount & CurrentAccount having specific attribute interest & cash_credit respectively. Create multiple saving & current account objects. Write a functionality to find out total balance in the bank.
3.	TypeScript Interfaces: Write an interface Printable. Create 2 objects circle & employee those implement Printable interface. Write a function printAll() that takes all objects as argument & invoke print() method on every object.
*/
/*
1.	Promises: Create 2 promises, one generates value of x & 
    another generates value of y. Write a program to print sum of x & y. 
    (Use Promise.all)
*/
const p1 = new Promise((resolve,reject)=>{
    let value = Math.floor((Math.random()*10)+1);
    resolve(value);
});
const p2 = new Promise((resolve,reject)=>{
    let value = Math.floor((Math.random()*10)+1);
    resolve(value);
});
Promise.all([p1,p2]).then(results=>{
    const sum = results.reduce((a,b)=> a+b);
    console.log(sum);
});
/*
2.	TypeScript classes & types: Write a class Account with attributes
 id, name, balance. Add two sub classes SavingAccount & 
 CurrentAccount having specific attribute interest & cash_credit respectively. 
 Create multiple saving & current account objects. Write a functionality to find out total balance in the bank.
*/
class Account{
    constructor(id:number, name:string, balance:number){
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

/*
3.	TypeScript Interfaces: Write an interface Printable. Create 2 objects circle & employee 
    those implement Printable interface. Write a function printAll() that takes 
    all objects as argument & invoke print() method on every object.
*/
interface Printable{
    objname:string;
    print():string;
}
let obj1:Printable = {
    objname:"Obj1",
    print:function() {
        return `${this.objname}`;
    }
};
let obj2:Printable = {
    objname:"Obj2",
    print:function() {
        return `${this.objname}`;
    }
};
const printAll = function (...objects:Object[]) {
    objects.forEach(i=>console.log(i.print()));
};
printAll(obj1,obj2);
//


























