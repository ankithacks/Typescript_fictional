interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrail(): string  
}


interface User{
    githubtoken: string
}

// inheritance in Typescript
interface Admin extends User{
    role: "admin" | "CTO" | "Cloud Practioner"
}

const newUser: Admin={dbId: 45, email: "newgithub@gmail.com", githubtoken:"2GHED", userId:341, startTrail: ()=> {
    return "started the user authentication"
}, role:"admin"}