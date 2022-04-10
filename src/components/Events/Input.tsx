import React from 'react'
type InputProps ={
    value : string
    handlechange : (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value,handlechange} : InputProps) { //Destructuring

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    //   console.log(event);
    // } -- also can be done in this way
  return (
    <div>

        <input type="text"
        value={value}
        onChange={handlechange}


        />
    </div>
  )
}
