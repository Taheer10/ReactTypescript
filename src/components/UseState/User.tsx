import {useState} from 'react'

type AuthUser ={
    name : string
    email: string
}

export default function User() {

    const [User, setUser] = useState<AuthUser |null>({} as AuthUser ) //Type Assertion
    //User can either be null or Auth User

    const LogInHandle = () => {
        setUser({
            name: 'Eden',
            email : 'sdfsd@gmail.com',

        })
    }

    // const LogOutHandle = () => {
    //     setUser(null)
    // }
    
  return (
    <div>
           
           <button onClick={LogInHandle}>Login</button>
           {/* <button onClick={LogOutHandle}>Log Out</button> */}


        <div> User Name is {User?.name} </div>
        <div> User Email is {User?.email} </div>

    </div>
  )
}
