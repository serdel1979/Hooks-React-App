import React from 'react'
import {useCounter} from '../hooks/useCounter'

export const CounterWidthCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();
    
  return (
   <>
   <h1>Counter Width Hook: {counter} </h1>

   <hr />

   <button className='btn btn-primary' onClick={()=>increment(5) }>increment</button>
   <button className='btn btn-primary' onClick={ reset }>Reset</button>
   <button className='btn btn-primary' onClick={ ()=>decrement(3) }>decrement</button>
   </>
  )
}
