"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(56);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("abc");
function signupUser(name, password, emailId) {
    var test = console.log("the name is ".concat(name, " and the entered email is ").concat(emailId));
    return test;
}
signupUser("github", 1234, "abc@gmail");
var LoginUser = function (email, name) {
    console.log("thanks for using Typescript as a service ".concat(name));
};
LoginUser("abc.com", "xyz.com");
