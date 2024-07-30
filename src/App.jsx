
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Middle from './components/Middle.jsx'

import img2 from './assets/img2.svg'
import left from './assets/left.svg'
import right from './assets/right.svg'
import i1 from './assets/i1-2.png'
import kurti from './assets/kurti-2.png'
import casual from './assets/casual.png'
import saree from './assets/saree.jpeg'
import shorts from './assets/shorts.jpeg'

import first from './assets/10.png'
import calvin from './assets/calvinKlein.png'
import ler from './assets/ler.jpeg'
import vimy from './assets/vimy.jpeg'
import Cart from './pages/Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Middle /></>
    },
    {
      path: "/cart",
      element: <><Navbar /><Cart /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
      

      <Footer />
    </>
  )
}

export default App
