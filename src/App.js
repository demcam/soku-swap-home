import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

/* eslint-disable */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
