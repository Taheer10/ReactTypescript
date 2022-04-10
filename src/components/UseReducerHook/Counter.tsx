import {useReducer} from 'react'

type CounterState ={
    count: number
}


//Recommended Action for Strict Action Types
type UpdateAction={
    type :'increment' | 'decrement'
    payload: number
}

type ResetAction={
    type :'reset'
    
}

type CounterAction = UpdateAction | ResetAction
// type CounterAction ={
//     type : 'increment' | 'decrement' | 'reset'
//     payload?: number
// }

const initialState ={count:0};

function reducer (state : CounterState,action: CounterAction){
  switch(action.type){
      case 'increment':
          return {count : state.count + action.payload}
      
          case 'decrement':
          return {count : state.count - action.payload}  
         
          case 'reset':
            return initialState
           

        default:
            return state  
  }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      
    Count :{state.count}
    <button onClick={()=> dispatch({type:'increment', payload :10})}>Increment 10</button>
    <button onClick={()=> dispatch({type:'decrement', payload :10})}>Decrement 10</button>

    <button onClick={()=> dispatch({type:'reset'})}>Reset</button>


    
    
    
    
    
    </>
  )
}