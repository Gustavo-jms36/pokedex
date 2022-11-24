import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import InputName from './components/InputName'
import Pokemons from './components/Pokemons'
import InfoPokemons from './components/InfoPokemons'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <HashRouter>

    <div className="App">

      <Routes>

        <Route path='/' element={<InputName />}/>

        <Route element={<ProtectedRoutes />}>
        <Route path='/pokedex' element={<Pokemons />}/>
        <Route path='/pokedex/:id' element={<InfoPokemons />}/>
        </Route>

      </Routes>
      
    </div>


    </HashRouter>

  )
}

export default App
