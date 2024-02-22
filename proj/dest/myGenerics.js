"use strict";
const score = [];
const names = [];
function identity(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function idenityThree(val) {
    return val;
}
idenityThree("3");
idenityThree(true);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    // do some database operations 
    const myIndex = 3;
    return products[myIndex];
}
// converting the above seach into an arrow function :--
const getMoreSearch = (products) => {
    // do some databse operations:-
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne, valueTwo
    };
}
anotherFunction(3, {
    connection: "MongoD",
    password: "password",
    userame: " giuthub"
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
