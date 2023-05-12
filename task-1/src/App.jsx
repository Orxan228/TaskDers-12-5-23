import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './assets/Components/Header/Header'
import Card from './Pages/Card/Card'
import { Home } from './Pages/Home/Home'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/card' element= {<Card/>}/>
      </Routes>
    </>
  )
}

export default App
