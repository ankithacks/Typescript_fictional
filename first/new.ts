// tuple in Typescript
let user: [string, number, boolean]

user=["github", 12, true]   //this is okay as the order is maintained whereas if we did:- [12, "github", false]...it qould throw an error. Tuples in ts help to maintain order

type User=[number, string]
const newUser: User=[112, "github@gmail.com"]
newUser[1]="testgit@gmail.com"
console.log(newUser)

// enums in typescript:-  used to restrict the amount of data
enum choice{
    github,
    devops,
    webdev
}

console.log(choice)


// interfaces in TS:- If we want to apply discount code, avail some services to the new user before payment is completed. then interfaces are used:
interface User1{
    email: string
    userId: number
    startTrial: ()=> string
    getCoupon(couponCode: string): number
}

const newUser1: User1={
    email: "git@gmail.com",
    userId: 12,
    startTrial:()=>{
        return "trial for 3 days only"
    },
    getCoupon:(name:  "DB45")=> {
        return 23
    },
}
