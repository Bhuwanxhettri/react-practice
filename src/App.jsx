import { Routes, Route, Outlet } from 'react-router'
import './App.css'
import Home from './routes/home.component';

const NavBar = () => {
  return <>
    <h3>Navigation bar</h3>
    <Outlet />
  </>
}

const Shop = () => {
  return <>
    <h1>Shop component</h1>

  </>
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< NavBar />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
