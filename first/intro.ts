console.log("hello world in typescript")

let greetings: String = "github"

greetings="git "  //this is possible whereas greetings=6 is not possible in typescript
console.log(greetings)
// number
let userId: number =13453

// boolean
let isLoggedIn: boolean = true;

// type inference
// here we try to avoid the use of colon variabe name and thr value instead we just use let userId=24570 and typescript is clever enough to satisfy the type it has


let hero: String;
function getHero(){
    return "github typescript"
}
// here if we wrote return 1234 it would give us an error that type checking is Scasted String whereas we declared it as String in the latter
hero=getHero()
export {}