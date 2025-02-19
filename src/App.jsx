import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Products from './components/Products';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index  element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router} />
        
    </div>
  )
}

export default App
