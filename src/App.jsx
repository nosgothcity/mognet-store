import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />}/>
          <Route path='/product/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
