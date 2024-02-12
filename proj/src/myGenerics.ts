const score: Array<number>=[]
const names: Array<string>=[]


function identity(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function idenityThree<Type>(val: Type): Type{
    return val 
}

idenityThree("3")
idenityThree(true)

function identityFour<T>(val: T):T{
    return val
}


interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T{
    // do some database operations 
    const myIndex=3
    return products[myIndex]
}

// converting the above seach into an arrow function :--
const getMoreSearch=<T>(products: T[]): T=>{
    // do some databse operations:-
    const myIndex=4
    return products[myIndex]
}


interface DataBase{
    connection: string,
    password: string,
    userame: string
}

function anotherFunction<T, U extends DataBase>(valueOne: T, valueTwo: U):object{
    return {
        valueOne, valueTwo
    }
}

anotherFunction(3, {
    connection: "MongoD",
    password: "password",
    userame:" giuthub"
})



interface Quiz{
    name:string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[]=[]
    addToCart(products: T){
        this.cart.push(products)
    }

}