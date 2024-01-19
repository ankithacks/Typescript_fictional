function add(num: number){
    return num+2
}

add(56);

function getUpper(val: String){
    return val.toUpperCase()
}
getUpper("abc")

function signupUser(name: String, password: Number, emailId: String){
    let test= console.log(`the name is ${name} and the entered email is ${emailId}`)
    return test
}
signupUser("github", 1234, "abc@gmail")

let LoginUser=(email: string, name: string)=>{
    console.log(`thanks for using Typescript as a service ${name}`)
}
LoginUser("abc.com", "xyz.com")


// if we write a function as:- function addTwo(num: number){return "hello "} but the return type is not a number. To make it return a number we do as:- 
function addThree(num: number): number{ 
    return num+3
}


// function getValue(myVal:number): string {
//     if(myVal> 5){
//         return true
//     }
//     return "stat 200 git cloned"
//     //this woukd give an error as its either string or boolean could be returned. Hence to overcome this we use the UNION function
// }


// const getHello= (s: string): string=>{
//     return "hello world"
// }

const technologies=["github", "CI/Cd", "jenkins", "aws", "devops"]
technologies.map((tech: string): string=>{
    return `techs are ${tech}`
})

function consoleError(error: string): void{
    // we could declare void so that the person using does not gets a value in return due to void
    console.log(error)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export {}