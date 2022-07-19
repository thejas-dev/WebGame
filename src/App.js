import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navi from './components/Navi'

import About from './components/About'
import Appy from './Appy'
import Faq from './components/Faq'


class App extends React.Component{

render(){
return(
  <BrowserRouter>
    <Navi/>
        <Routes>
      <Route path='/' element={<Appy/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>
    </Routes>
  </BrowserRouter>
  )



}}

export default App;
