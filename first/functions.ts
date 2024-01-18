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

export {}