import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import {orginals,actions} from "./url"
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Originals" />
      <RowPost url={actions}  title="Actions" isSmall />
    </div>
  )
}

export default App
