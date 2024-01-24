// combination of two or more types of data types as if we are not sure what would be the data that would come in. It is done by using the | operator
let score: number | string= 33 
score=44
score="github"


type User={
    name: string;
    id: number
}

type Admin={
    username: string
}

let github: User | Admin={
    name:"git", id: 689
}

github={ username:"clone", id:4545}


function getDbId(id:number| string){
    if(typeof id === "number"){
        console.log(`the entered number is ${id}`)
    }
    else{
        console.log(`db id is ${id}`)
    }
}
getDbId("4")


// arrays:
 const data: number[]=[1,4,3]
 const data2: (number | string)[]=["3", 5, "4"]

//  too have a strict content from only and only a set of data, typescript concept of union is best used case:-Example
let seatAllotment: "aisle" | "middle"
// seatAllotment= "crew"    this is not allowed as only aisle and middle is allowed
