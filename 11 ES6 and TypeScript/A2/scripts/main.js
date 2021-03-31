"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
1.	Symbols: Write a class that defines next() method to return next number
from Fibonacci series. The class will have a private attributes ‘previousNo’ & ‘currentNo’.

*/
var fibo = /** @class */ (function () {
    function fibo(n, arr) {
        if (arr === void 0) { arr = [0, 1]; }
        this.n = n;
        this.arr = arr;
        var previousNo = 0;
        var currentNo = 1;
        var next = currentNo;
        while (n > 2) {
            next = currentNo + previousNo;
            previousNo = currentNo;
            currentNo = next;
            arr.push(next);
            n--;
        }
        var myIterator = this.arr[Symbol.iterator]();
    }
    fibo.prototype.next = function () {
        //return this.arr.length >0 ? {value: this.arr.shift(), done:false} : {value: undefined, done:true};
        //Used symbol here
        var myIterator = this.arr[Symbol.iterator]();
        var val;
        while (!(val = myIterator.next()).done) {
            console.log(val.value);
        }
    };
    return fibo;
}());
var ob1 = new fibo(5);
console.log(ob1.next());
//console.log(ob1.next());
//console.log(ob1.next());
//console.log(ob1.next());
//console.log(ob1.next());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2.	Iterators: Write a program that returns next Armstrong number after calling getNextArmstrong() method.
*/
var iterable = [1, 2, 3, 4, 5, 6]; //Our ideal Armstrong numbers
function createIterator(array) {
    var count = 0;
    return {
        getNextArmstrong: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(iterable);
console.log(myIterator.getNextArmstrong());
console.log(myIterator.getNextArmstrong());
console.log(myIterator.getNextArmstrong());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3.	Generators: Write a program that returns next Armstrong number after calling getNextArmstrong() method.
    Add functionality to reset generating Armstrong number from zero.
    In case, Armstrong number goes above one thousand then throw an error.
*/
function generatorFunc(n1) {
    var list, _i, list_1, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = [153, 370, 371, 407] //list of armstrong numbers
                ;
                _i = 0, list_1 = list;
                _a.label = 1;
            case 1:
                if (!(_i < list_1.length)) return [3 /*break*/, 4];
                item = list_1[_i];
                return [4 /*yield*/, item];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, null];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var generatorObject = generatorFunc(128);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
var generatorObject = generatorFunc(128); //resetting
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
;
//got to know there is no way to reset a generator --so re-declare and assign again
// https://stackoverflow.com/questions/23848113/is-it-possible-to-reset-an-ecmascript-6-generator-to-its-initial-state
/*
let getNextArmstrong = new Promise((function (resolve, reject){
    (num:number)=>{
        if(num>=1000){
            reject('Error number is above or equal to 1000');
        }else{
            function():GeneratorFunction{

            }
        }
    }
}));*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4.	Collections: Using Set & Map, create a static data for chatting application.
Here we have 2 chatrooms, every chatroom is having 3 users & every user has posted
different messages in a chat room. Note that one user can belong to a single chat room only.
Now you need to find out how you will hold this data using Set & Map data structures.
Also add functionality to get list of all users from a specific chatroom & listing down all message from a chatroom.
*/
var ChatRoom = /** @class */ (function () {
    function ChatRoom(roomNo) {
        var user = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            user[_i - 1] = arguments[_i];
        }
        this.roomNo = roomNo;
        this.user = user;
    }
    ChatRoom.prototype.getAllUsers = function () {
        this.user.forEach(function (i) { return console.log(i.name); });
    };
    ChatRoom.prototype.getAllMessages = function () {
        this.user.forEach(function (i) { return console.log(i.messages); });
    };
    return ChatRoom;
}());
var Users = /** @class */ (function () {
    function Users(name) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        this.name = name;
        this.messages = messages;
    }
    return Users;
}());
var user1 = new Users("vunnam", "yes bro", "Hi", "are you there!");
var user5 = new Users("nobita", "evaddra vad", "nen", "nenu ranu thengay!");
var user2 = new Users("madhu", "yes bro", "Hi", "are you there!");
var user3 = new Users("naruto", "iidu", "evado", "kuda thelvad!");
var user4 = new Users("govindh", "iiduu kuda", "na", "friende!");
var user6 = new Users("krrish", "yes bro", "Hi", "are you there!");
var chatRoom1 = new ChatRoom(1, user1, user2, user3);
var chatRoom2 = new ChatRoom(1, user4, user5, user6);
var allUsers = new Set();
allUsers.add(user1);
allUsers.add(user2);
allUsers.add(user3);
allUsers.add(user4);
allUsers.add(user5);
allUsers.add(user6);
allUsers.add(user6); //ignored
//users and chat room mapping;
var userRoom = new Map();
userRoom.set(user1, chatRoom1);
userRoom.set(user2, chatRoom1);
userRoom.set(user3, chatRoom1);
userRoom.set(user4, chatRoom2);
userRoom.set(user5, chatRoom2);
userRoom.set(user6, chatRoom2);
console.log(allUsers);
console.log(userRoom);
console.log(userRoom.get(user4));
chatRoom1.getAllUsers();
chatRoom1.getAllMessages();
chatRoom2.getAllUsers();
