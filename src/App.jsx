import React from 'react'
import User from './component/User'
import ChangeColor from './component/ChangeColor'

const App = () => {
  const data={
    name: "dinkar"
  }
  return (
    <div>
      <User  datas={data}/>
      <ChangeColor/>
    </div>
  )
}

export default App