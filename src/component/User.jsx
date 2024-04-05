import React, { useState } from 'react'
import {createStore} from 'redux'

const User = ({datas}) => {
    const [value, setvalue] = useState("")
    const reducer =(state=value,action)=>{
      if(action.type == "login"){
        return state ="login success";
      }
      else{
        return state ="login fail";
      }
    }
    const store= createStore(reducer);
    store.subscribe(()=>{
        // alert(store.getState());
        setvalue(store.getState())
    })
  return (
    <div>
        <h1 className='capitalize text-3xl font-bold text-red-400 text-center'>sneha {datas.name} deshmukh</h1>
        <h4>{value}</h4>
         <button className='text-xl font-bold bg-blue-400  text-white p-2 rounded  m-5 'onClick={()=>{
          store.dispatch({
            type :"login"
          })
         }}>login</button>
    </div>
  )
}

export default User