"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var x = 10;
if (x == 10) {
    var y = true;
    console.log(y);
}
//console.log(y);
var order = {
    id: 1,
    title: "the so Title",
    price: 100,
    printOrder: function () {
        console.log(order);
    },
    getPrice: function () {
        return this.price;
    }
};
console.log(order);
console.log(order.getPrice());
order.printOrder();
var orderClone = {};
Object.assign(orderClone, order);
console.log(orderClone);
/*
4.	Arrow functions: Take an array of strings & convert it into another array of object
 which has two properties {string, string_length}.
 For example:
 let names = [‘Tom’, ‘Ivan’, ‘Jerry’]
Output: [ {name: ’Tom’, length: 3}, {name: ’Ivan’, length: 4 }, {name: ’Jerry’, length: 5} ]
 */
var stAr = ['Tom', 'Ivan', 'Jerry'];
var obAr = stAr.map(function (str, length) { return [{ name: str, length: str.length }]; });
console.log(obAr);
/*
5.	Extended parameter handling:
    a.	Write a add() with default values.
    b.	Write a function userFriends() that takes 2 arguments username & array of user friends.
    The function should print username & his list of friends. (Use rest parameters)
    c.	Write a function printCapitalNames() that takes five names as argument & prints them
    in capital letters. Use spread operator in order to call printCapitalNames() function.
*/
var Obj = {
    add: function (num1, num2) {
        if (num1 === void 0) { num1 = 10; }
        if (num2 === void 0) { num2 = 20; }
        return num1 + num2;
    },
    userFriends: function (username) {
        var userFriends = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            userFriends[_i - 1] = arguments[_i];
        }
        console.log(username);
        console.log(userFriends);
    },
    printCapitalNames: function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        names.forEach(function (i) { return console.log(i.toUpperCase()); });
    }
};
console.log(Obj.add(5, 6));
console.log(Obj.add());
//let ufrnds = ['tom','jerry','nobita','madhu'];
var user = 'Vunnam';
Obj.userFriends(user, 'tom', 'jerry', 'nobita', 'shinchan');
Obj.printCapitalNames('Netflix', 'Prime', 'hulu', 'aalu', 'golu');
/*6
    6.	Template literals: Draft a ticket to Sysnet
    that describes problem with your laptop.
    Use ‘template literals’ to add value of laptop model,
    your desk no, your name etc.
*/
var laptopModel = "Asus VivoBook Gaming X5102L";
var myDeskNo = 8;
var myName = "Vunnam Lakshminarayana";
var ticket = "Hello message I am " + myName + " and my Desk no is " + myDeskNo + " and My System model is " + laptopModel + " and the ticket message";
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
var myArr = ['Hi', 'Hello', 'How', 'are'];
var first = myArr[0], second = myArr[1], third = myArr[2], forth = myArr[3];
console.log(third);
var obje = {
    name1: "ghost",
    address: {
        hNo: 13,
        city: "Evadki telusu bro",
        zipcode: 12345
    }
};
var name1 = obje.name1, address = __rest(obje, ["name1"]);
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
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.ToString = function () {
        return "{id: " + this.id + ", name: " + this.name + ", balance:" + this.balance + "}";
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.interest = function () {
    };
    SavingsAccount.prototype.cash_credits = function () {
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.interest = function () {
    };
    CurrentAccount.prototype.cash_credits = function () {
    };
    return CurrentAccount;
}(Account));
var sa = new SavingsAccount(1, "nani", 200000);
var ca = new CurrentAccount(1, "nani", 16000);
console.log(sa);
console.log(ca);
console.log(sa.ToString());
console.log(ca.ToString());
