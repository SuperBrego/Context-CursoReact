import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
