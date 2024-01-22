"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "github",
    email: "github@gmail.com",
    isActive: true
};
function createuser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createuser({ name: "github", isPaid: true });
function createCourse() {
    return { name: "github actoins", isPaid: true, price: true };
}
function createUser(user) {
    console.log("the name is " + user.name);
    console.log("the email is" + user.email);
    return { name: "github", email: "github.com", isActive: true };
}
createUser({ name: "github", email: "github.com", isActive: true });
var usertest = {
    _id: "github",
    name: "github",
    age: 12
};
// now changing the initial value:-
usertest.age = 14;
console.log(usertest.age); //this is perfectly all right but if we do usertest._id =".." its error
