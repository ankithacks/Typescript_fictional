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

export {}