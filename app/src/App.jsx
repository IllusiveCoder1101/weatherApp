import React from 'react'

import './App.css'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Loader from './Components/Loader'
import { AppContext } from './context/context'
function App() {
  const { loading } = React.useContext(AppContext)

  return (
    <main className='App'>
      {(loading) ? <Loader /> : <></>}
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default App
