

type User={
    id:string ,
    name:string
}
// we built the array of the user type  
const users:User[]=[] 


export const db={
    user:{
        findMany:async ()=> users   ,
        findById:async (id:string) => users.find((user)=>user.id ===id ) ,
        create:async (data:{name:string}) => {
            const user={id:String(users.length +1),
                ...data
            }
            users.push(user)
            return user
        }
      
    }
}
