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
console.log(github.type);
