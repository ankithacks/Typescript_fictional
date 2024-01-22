const knowledge: string[]=[]
// the above is the syntax for declaring an array
const test: Array<number>=[]        //another way to declare array in ts


type user={
    name: string,
    isActive: boolean
}

const allUser: user[]=[]      //another way of defining an array in a variable created by an object

const models: number[][]=[
    [255,255,255]
    // [""] this string entry is not possible as we declared it as number inside array also
]

knowledge.push("github")
knowledge.push("aws")
test.push(1)
allUser.push({name:"github", isActive:true})