const User={
    name: "github",
    email: "github@gmail.com",
    isActive: true
}

function createuser({name: string,isPaid: boolean}){}

createuser({ name: "github", isPaid: true})

function createCourse():{name: string, isPaid: boolean, price: boolean}{
    return {name: "github actoins", isPaid: true, price:true}
}


// type alias:-
type user={
    name: string,
    email: string,
    isActive: true
}

function createUser(user: user):user
// this last user defines what the return type should be
{
    console.log("the name is "+ user.name)
    console.log("the email is"+ user.email)
    return {name:"github", email:"github.com", isActive: true}
}

createUser({name:"github", email:"github.com", isActive: true})

type check={
    // readonly makes it when we want to make a property UNchangeable, so the value of the property cannot be changed after it has been set.
    readonly _id:string,
    name: string,
    age: number
    creditCardDetails?: number    //this question mark means that this feild is defined as optinal which means that its someone may wish or may not wish to provide the details.

}

let usertest: check={
    _id: "github",
    name: "github",
    age: 12
}

// now changing the initial value:-
usertest.age= 14
console.log(usertest.age)   //this is perfectly all right but if we do usertest._id =".." its error

// mix and match of types:-
type cardNumber={
    cardNumber: string
}

type cardDate={
    cardDate: string
}
// sort of Inheritance is used
type creditDetails= cardNumber & cardDate & {
    cvv: string
}


export {}