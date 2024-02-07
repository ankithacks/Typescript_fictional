"use strict";
console.log('typescript project ');
//to compile we write:- tsc src/index.ts and to check for the changes we do:- tsc -w 
console.log("the sever started on typescript watch mode and runnning successfully!!");
// we use npm i lite-server to run the typescript based on project scenarios
console.log("Typescript is kinda amazing!!!");
// classes in typescript:-
class User {
    constructor(email, name) {
        this.type = "";
        this.email = email;
        this.name = name;
    }
}
const github = new User("github@gmail.com", "github");
// console.log(github.type) This is inacessible as we declared the type as private except within the same class. By default all variables are marked as Public
class Test {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._coourseCount = 1;
        this.type = "DevOps";
        this.route = 2;
    }
    DeleteToken() {
        console.log("token has been deleted");
    }
    // getters:-
    get Email() {
        return `Email sent to github ${this.email}`;
    }
    get courseCount() {
        return this._coourseCount;
    }
    // setters:-
    set courseCount(courseNum) {
        if (courseNum > 4) {
            throw new Error("taking course updates less than 4");
        }
        this._coourseCount = courseNum;
    }
}
class subTestUser extends Test {
    constructor() {
        super(...arguments);
        this.isValid = true;
    }
    changeCourseCount() {
        // this._courseCount=4 this will show error as _courseCount is declared private but if ew declare it as Protected it means that the inherited child class could call the members of the parent class declared  
        this.route = 45; //this is valid 
    }
}
