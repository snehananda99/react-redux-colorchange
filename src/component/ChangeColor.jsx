import React, { useState } from 'react'
import {createStore} from 'redux'
const ChangeColor = () => {
    const [style, setstyle] = useState({color:""})
    const reducer =(state={},action)=>{
     if(action.type == "red"){
        return state={
           color: "red"
        }
     }
     else if(action.type == "green"){
        return state={
           color: "green"
        }
     }
     else if(action.type == "pink"){
        return state={
           color: "pink"
        }
     }
     else if(action.type == "orange"){
        return state={
           color: "orange"
        }
     }
     else if(action.type == "blue"){
        return state={
           color: "blue"
        }
     }
    }
    const store =createStore(reducer);
    store.subscribe(()=>{
       setstyle( store.getState())
    })
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'style={style}>change color</h1>
        <select onChange={(e)=>{
         store.dispatch({
            type: e.target.value
         })        
        }}>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
        </select>
    </div>
  )
}

export default ChangeColor