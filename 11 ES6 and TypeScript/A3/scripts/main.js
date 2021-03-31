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
var p1 = new Promise(function (resolve, reject) {
    var value = Math.floor((Math.random() * 10) + 1);
    resolve(value);
});
var p2 = new Promise(function (resolve, reject) {
    var value = Math.floor((Math.random() * 10) + 1);
    resolve(value);
});
Promise.all([p1, p2]).then(function (results) {
    var sum = results.reduce(function (a, b) { return a + b; });
    console.log(sum);
});
/*
2.	TypeScript classes & types: Write a class Account with attributes
 id, name, balance. Add two sub classes SavingAccount &
 CurrentAccount having specific attribute interest & cash_credit respectively.
 Create multiple saving & current account objects. Write a functionality to find out total balance in the bank.
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
var obj1 = {
    objname: "Obj1",
    print: function () {
        return "" + this.objname;
    }
};
var obj2 = {
    objname: "Obj2",
    print: function () {
        return "" + this.objname;
    }
};
var printAll = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    objects.forEach(function (i) { return console.log(i.print()); });
};
printAll(obj1, obj2);
//
