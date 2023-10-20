import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'

function Routers() {
  return (
    <Routes>
      <Route path='' element={<Navigate to= "/home"/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default Routers
