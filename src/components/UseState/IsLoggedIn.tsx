import {useState} from 'react'

export default function IsLoggedIn() {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    const LogInHandle = () => {
        setisLoggedIn(true)
    }

    const LogOutHandle = () => {
        setisLoggedIn(false)
    }
    
  return (
    <div>
           
           <button onClick={LogInHandle}>Login</button>
           <button onClick={LogOutHandle}>Log Out</button>


        <div> {isLoggedIn ? 'Logged In': 'Log out'}</div>
    </div>
  )
}
