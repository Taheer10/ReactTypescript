import React from 'react'
 type Greetdetaisl = {
     name: string,       //String Datatype
     messageCount ?: number, //Numer datatype  --? it use makes optional passing of props in App.tsx
     isloggedin: boolean //Boolean data tpe
 }

export default function Greet(props: Greetdetaisl) {
  const{messageCount=0} = props  //Default Props
  return (
    <div>
        {
            props.isloggedin ? `Welcome to Typescript -- ${props.name} 
            No of unread message = ${messageCount}
            ` : 'Welcome Guest'
        }
    
    </div>
  )
}
